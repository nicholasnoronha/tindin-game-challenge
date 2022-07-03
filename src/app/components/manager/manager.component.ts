import { HttpClient } from '@angular/common/http';
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
  filter: string = '';

  isFeching: boolean;
  gameName: string;
  gameQueried?: Game = {title: '', description: '', _id: ''};
  hasGameQueried: boolean = false;
  
  constructor(
    private gameService: GameService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.gameService
      .getGamesList()
      .subscribe((res) => {
        this.games = res.games
        this.isFeching = true
      })
  }

  getGame() {
    console.log('some ', this.games.some((game) => game.title == this.gameName))
    console.log(this.games.find((game) => game.title == this.gameName))
    if (this.games.some((game) => game.title == this.gameName)) {
      this.gameQueried = this.games.find((game) => game.title == this.gameName)
    }
    // this._setGameQueried()
    return this.games.find((game) => game.title == this.gameName)
  }
  
  // _setGameQueried() {
  //   if(!!this.getGame()) {
  //     this.hasGameQueried = true
  //   }
  // }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.filter = element.value;
    }
  }
}
