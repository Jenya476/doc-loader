import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {

  @Input() progress?: number;
  @Input() color = 'blue';
  RADIUS = 54;
  CIRCUMFERENCE = 2 * Math.PI * this.RADIUS;
  constructor() { }

  ngOnInit() {
  }

  calculateProgress(progressInPercent: number): number {
    const progress = progressInPercent / 100;
    return this.CIRCUMFERENCE * (1 - progress);
  }

}
