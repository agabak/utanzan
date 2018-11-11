import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ut-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements  OnChanges {
   @Input() rating = 0;
   starWidth = 0;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    console.log('was clide !');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
