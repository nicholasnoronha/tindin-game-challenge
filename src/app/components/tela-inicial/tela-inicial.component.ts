import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/Game'

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  games: Game[] = []

  constructor(gameService: GameService) {
    gameService
      .getGamesList()
      .subscribe((res) => {
        console.log(res.games)
        this.games = res.games
      })
  }

  ngOnInit(): void {}
}
