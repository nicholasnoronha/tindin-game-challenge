import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/interfaces/Game';
import { GameService } from 'src/app/services/game.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/auth/token.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Photo {
  name: string;
  url: string;
}

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  @ViewChild('photoUrl') photoUrl: ElementRef;

  faHome = faHome;  
  photo: string = "";

  game: Game = {title: '', description: '', _id: '', resume: ''};

  gameForm: FormGroup;


  platforms: string[] = ["PS", "PS2", "PS3", "PS4", "PS5", "PSP", "XBOX",
  "XBOX 360", "XBOX ONE", "XBOX SERIES S", "XBOX SERIES X", "SUPER NINTENDO",
  "NINTENDO 64", "NINTENDO SWITCH", "NINTENDO WII", "NINTENDO DS", "NINTENDO 3DS",
  "MEGA DRIVE", "PC", "MOBILE"]
  
  genres: string[] = ["Fight", "Sports", "Survival", "Horror", "RPG", "Fps",
  "Tps", "Platform", "Adventure", "Action", "Minigame", "Racing", "Strategy",
  "Musical", "Dance", "Simulator"]

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}
    
    ngOnInit(): void {
  
      this.gameForm = this.formBuilder.group({
        gameTitle: ['', Validators.required],
        gameResume: [''],
        gameGenres: [''],
        gameStudio: [''],
        gameCompany: [''],
        gamePlatform: [''],
        gameTags: [''],
        gameMediumPrice: [''],
        gameReleaseYear: [''],
        gameDescription: ['', Validators.required],
        gamePhoto: [''],
      });
    }

  handleHomeIconClick() {
    if(this.tokenService.hasToken()) {
      this.router.navigateByUrl('home/games')
    } else {
      this.router.navigateByUrl('')
    }
  }

  postGame() {
    let photo: Photo =
    {
      name: "primaryPhoto",
      url: this.gameForm.get("gamePhotoLink")?.value
    }

    const data: Game = {
      title: this.gameForm.get('gameTitle')?.value,
      description: this.gameForm.get('gameDescription')?.value,
      genres: [this.gameForm.get('gameGenres')?.value],
      platforms: [this.gameForm.get('gamePlatform')?.value],
      resume: this.gameForm.get('gameResume')?.value,
      mediumPrice: this.gameForm.get('gameMediumPrice')?.value,
      releaseYear: this.gameForm.get('gameReleaseYear')?.value,
      photos: [photo]
    }

    console.log(data)

    this.gameService.postGame(data)
      .subscribe(() => {
        alert('Game added successfully')
      }, 
        (error) => console.log(error))
  }

  onPhotoChange(photo_url: string) {
    this.photo = photo_url
    console.log("photo: ", photo_url)
  }
}