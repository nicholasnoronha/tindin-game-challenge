import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game'

interface GamesReq {
  games: Game[];
  totalSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGamesList() {
    return this.http
      .get<GamesReq>('https://api-labs.tindin.com.br/games')
  }
}
