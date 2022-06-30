import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/Game'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  games: Game[] = []
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService
      .getGamesList()
      .subscribe((res) => {
        console.log(res.games)
        this.games = res.games
      })
  }

}
