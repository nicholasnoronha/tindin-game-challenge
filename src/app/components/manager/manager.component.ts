import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/Game'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  games: Game[] = []
  filter: string = '';

  isFeching: boolean;
  gameName: string;
  gameQueried?: Game = {title: '', description: '', _id: ''};
  hasGameQueried: boolean = false;
  
  constructor(
    private gameService: GameService,
    private router: Router,
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {
    this.gameService
      .getGamesList()
      .subscribe((res) => {
        this.games = res.games
        console.log(res.games)
        this.isFeching = true
      })
  }

  getGame() {
    console.log('some ', this.games.some((game) => game.title == this.gameName))
    console.log(this.games.find((game) => game.title == this.gameName))
    if (this.games.some((game) => game.title == this.gameName)) {
      this.gameQueried = this.games.find((game) => game.title == this.gameName)
    }
    return this.games.find((game) => game.title == this.gameName)
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.filter = element.value;
    }
  }

  navigateToNewGame(): void {
    this.router.navigateByUrl('games/new-game')
  }
}
