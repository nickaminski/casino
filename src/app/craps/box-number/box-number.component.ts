import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-number',
  templateUrl: './box-number.component.html',
  styleUrls: ['./box-number.component.scss']
})
export class BoxNumberComponent implements OnInit {

  @Input() layBet: number;
  @Input() placeBet: number;
  @Input() buyBet: number;
  @Input() comeBet: number;
  @Input() label: string;
  @Input() shouldRotate: boolean;

  @Output() onLayOdds: EventEmitter<any> = new EventEmitter();
  @Output() onBuy: EventEmitter<any> = new EventEmitter();
  @Output() onPlace: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.label = '';
    this.shouldRotate = false;
    this.layBet = 0;
    this.placeBet = 0;
    this.buyBet = 0;
    this.comeBet = 0;
  }

  ngOnInit(): void {
  }

  layOdds() {
    this.onLayOdds.emit(this.label);
  }

  buy() {
    this.onBuy.emit(this.label);
  }

  place() {
    this.onPlace.emit(this.label);
  }

}
