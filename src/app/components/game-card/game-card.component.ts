import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../interfaces/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game = {title: '', description: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
