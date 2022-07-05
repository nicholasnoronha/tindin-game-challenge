import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  gameRate: number

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService){ }

  ngOnInit(): void {
  }

  changeGameRate(rate: number) {
    this.gameRate = rate
  }

  rateGame() {
    const gameId = this.activatedRoute.snapshot.params["gameId"]
    const data = { gameId, rate: this.gameRate }

    this.gameService.rateGame(data).subscribe(() => alert("Rate has changed"))
  }
}
