import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chip-rack',
  templateUrl: './chip-rack.component.html',
  styleUrls: ['./chip-rack.component.scss']
})
export class ChipRackComponent implements OnInit {

  @Input() bankroll: number;
  @Output() onBetChanges = new EventEmitter<any>();

  betInputControl = new FormControl('');

  constructor() {
    this.bankroll = 100;
  }

  ngOnInit(): void {
    this.betInputControl.valueChanges.subscribe(value => {
      if (value > this.bankroll) {
        this.betInputControl.setValue(this.bankroll);
        return;
      }
      this.onBetChanges.emit(Number(value));
    }
      );
  }

}
