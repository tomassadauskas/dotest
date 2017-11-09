import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChucknorrisService } from '../services/chucknorris.service';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/Observable/forkJoin';

import {Subscription} from 'rxjs/Rx';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-chuck-fact',
  templateUrl: './chuck-fact.component.html',
  styleUrls: ['./chuck-fact.component.css']
})
export class ChuckFactComponent implements OnInit {

  private subscription: Subscription;

  // interval for auto change
  interval = 150; // 10 = 1sec
  tick: number;

  // disable while observable not ready
  inProgress: boolean;

  fact: any;
  categories: any;
  category: string;

  constructor(private srv: ChucknorrisService) { }

  ngOnInit() {
    // initial setup
    this.inProgress = false;
    this.category = '';
    this.tick = this.interval;

    // subscribing for the first random post and for the categories - single observable!
    var sources = [
      this.srv.getResource('random'),
      this.srv.getResource('categories'),
    ];


    Observable.forkJoin(sources)
    .subscribe(data => {
      this.fact = data[0];
      this.categories = data[1];
      this.inProgress = false;
    }, err => {
      // tslint:disable-next-line:curly
      if (err.status === 404)
        this.inProgress = true;
    });

    // timer for auto change:
    const timer = Observable.timer(2000, 100);
    this.subscription = timer.subscribe(t => {
      this.tick -= 1;
      // tslint:disable-next-line:curly
      if (this.tick === 0) this.getWisdom();
    });

  }

  OnDestroy() {
    this.subscription.unsubscribe();
  }

  getWisdom() {
    this.inProgress = true;
    this.srv.getWisdom(this.category)
    .subscribe(rez => {
      this.fact = rez;
      this.inProgress = false;
      this.tick = this.interval;
    });
  }

  changeCat(value) {
    this.category = value;
    console.log(this.category);
    this.getWisdom();
  }

}
