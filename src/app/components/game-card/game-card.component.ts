import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../interfaces/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game = {title: '', description: '', _id: ''};
  
  constructor(private router: Router) { }

  ngOnInit(): void {}
  // (src)="game.photos[0]"
  navigateToDetails(): void {
    console.log(this.game._id)
    this.router.navigateByUrl(`game/${this.game._id}`)
  }

  getPrimaryPhoto() {
    const primaryPhoto = !!this.game.photos?.length ? this.game.photos[0].url : '../../../assets/img-not-found.png'
    console.log(primaryPhoto)
    return primaryPhoto
  }
}
