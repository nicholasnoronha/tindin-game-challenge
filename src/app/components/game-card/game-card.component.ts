import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
