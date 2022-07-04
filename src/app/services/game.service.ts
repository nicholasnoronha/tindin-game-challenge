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

@Injectable({
  providedIn: 'root'
})
export class GameService {
  token: string | [];
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    this.token = this.tokenService.getToken();
  }
  getGamesList() {
    return this.http
      .get<GamesReq>('https://api-labs.tindin.com.br/games')
  }
  
  getGame(id: string) {
    return this.http
      .get<GameReq>(`https://api-labs.tindin.com.br/games/${id}`)
  } 

  postGame(game: Game) {
    const headers = { "x-api-key": String(this.token) }
    return this.http
      .post(`https://api-labs.tindin.com.br/games`, { headers })
  }
}
