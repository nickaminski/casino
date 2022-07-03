import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-craps',
  templateUrl: './craps.component.html',
  styleUrls: ['./craps.component.scss']
})
export class CrapsComponent implements OnInit {

  state: CrapsTableState;

  currentBet: number;

  constructor() {
    this.currentBet = 0;
    this.state = this.resetBoard();
  }

  ngOnInit(): void {
  }

  resetBoard(): CrapsTableState {
    return {
      box4: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      box5: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      box6: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      box8: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      box9: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      box10: { layBet: 0, buyBet: 0, placeBet: 0, comeBet: 0},
      fieldBet: 0,
      comeBet: 0,
      passLineBet: 0,
      dontComeBet: 0,
      dontPassLineBet: 0,
      big68Bet: 0
    };
  }

  clickBoard() {
    console.log(this.state);
  }

  onBetChange(event: number) {
    this.currentBet = event;
  }

  onDontComeBet() {
    this.state.dontComeBet = this.currentBet;
  }

  onBuy(event: string) {
    switch(event)
    {
      case '4': this.state.box4.buyBet = this.currentBet; break;
      case '5': this.state.box5.buyBet = this.currentBet; break;
      case 'Six': this.state.box6.buyBet = this.currentBet; break;
      case '8': this.state.box8.buyBet = this.currentBet; break;
      case 'Nine': this.state.box9.buyBet = this.currentBet; break;
      case '10': this.state.box10.buyBet = this.currentBet; break;
    }
  }

  onPlace(event: any) {
    switch(event)
    {
      case '4': this.state.box4.placeBet = this.currentBet; break;
      case '5': this.state.box5.placeBet = this.currentBet; break;
      case 'Six': this.state.box6.placeBet = this.currentBet; break;
      case '8': this.state.box8.placeBet = this.currentBet; break;
      case 'Nine': this.state.box9.placeBet = this.currentBet; break;
      case '10': this.state.box10.placeBet = this.currentBet; break;
    }
  }

  onLayOdds(event: any) {
    switch(event)
    {
      case '4': this.state.box4.layBet = this.currentBet; break;
      case '5': this.state.box5.layBet = this.currentBet; break;
      case 'Six': this.state.box6.layBet = this.currentBet; break;
      case '8': this.state.box8.layBet = this.currentBet; break;
      case 'Nine': this.state.box9.layBet = this.currentBet; break;
      case '10': this.state.box10.layBet = this.currentBet; break;
    }
  }

}

interface CrapsTableState {
  box4: BoxNumberState;
  box5: BoxNumberState;
  box6: BoxNumberState;
  box8: BoxNumberState;
  box9: BoxNumberState;
  box10: BoxNumberState;
  fieldBet: number;
  comeBet: number;
  passLineBet: number;
  dontComeBet: number;
  dontPassLineBet: number;
  big68Bet: number;
};

interface BoxNumberState {
  layBet: number;
  buyBet: number;
  placeBet: number;
  comeBet: number;
};