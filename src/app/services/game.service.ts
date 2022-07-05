import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game'
import { TokenService } from './auth/token.service';

interface GamesReq {
  games: Game[];
  totalSize: number;
}

interface GameReq {
  game: Game
}

interface GameRate {
  gameId: string, 
  rate: number
}

@Injectable({
  providedIn: 'root'
})

export class GameService {
  token: string | [];
  apiUrl: string = 'https://api-labs.tindin.com.br'
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    this.token = this.tokenService.getToken();
  }

  getGamesList() {
    return this.http
    .get<GamesReq>(`${this.apiUrl}/games`)
  }
  
  getGame(id: string) {
    return this.http
      .get<GameReq>(`${this.apiUrl}/games/${id}`)
  } 

  postGame(game: Game) {
    return this.http
      .post(`${this.apiUrl}/games`, game)
  }

  rateGame(gameRate: GameRate) {
    return this.http.post(`${this.apiUrl}/games/rate`, gameRate)
  }
}
