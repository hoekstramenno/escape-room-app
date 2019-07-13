import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-left',
  templateUrl: './time-left.page.html',
  styleUrls: ['./time-left.page.scss'],
})
export class TimeLeftPage implements OnInit {

  startGameTime:any = '2019-07-11T09:00:00';
  endGameTime:any = '2019-07-11T18:00:00';
  percent:number = 0;
  timeLeft:number;


  constructor() {

  }

  ngOnInit() {
    this.calculate();
  }

  update() {
    this.calculate();
  }

  calculate() {
    let dateNow = new Date().getTime() / 1000;
    let dateStart = new Date(this.startGameTime).getTime() / 1000;
    let dateFinished = new Date(this.endGameTime).getTime() / 1000;
    let totalTime = (dateFinished - dateStart);
    this.timeLeft = (dateFinished - dateNow);
    this.percent = Math.ceil(((totalTime-this.timeLeft) / totalTime) * 100);
  }
}
