import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/interfaces/Game';
import { GameService } from 'src/app/services/game.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game = {title: '', description: '', _id: ''};
  games: Game[];
  faYoutube = faYoutube;
  faHome = faHome;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router
    ) {}
    
  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params['gameId'];

    this.gameService.getGamesList()
      .subscribe((res) => {
        this.games = res.games
        console.log('res.games ', this.games)
      })

    this.gameService.getGame(gameId)
      .subscribe((res) => {
        this.game = res.game
      })
    
  }

  getPrimaryPhoto() {
    const primaryPhoto = !!this.game.photos?.length ? this.game.photos[0].url : '../../../assets/img-not-found.png'
    return primaryPhoto
  }

  handleHomeIconClick() {
    if(this.tokenService.hasToken()) {
      this.router.navigateByUrl('home/games')
    } else {
      this.router.navigateByUrl('')
    }
  }
}
