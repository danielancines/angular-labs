import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  rates: number[] = [1, 2, 3, 4, 5];
  rate = 0;
  temporaryRate: number;
  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.temporaryRate = undefined;
    this.rated.emit(r);
  }

  setTemporaryRate(r: number) {
    if (this.temporaryRate === undefined) {
      this.temporaryRate = this.rate;
    }

    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.temporaryRate !== undefined) {
      this.rate = this.temporaryRate;
      this.temporaryRate = undefined;
    }
  }

}
