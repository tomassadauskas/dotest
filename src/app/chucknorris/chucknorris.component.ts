import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChucknorrisService } from '../services/chucknorris.service';

import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.css']
})
export class ChucknorrisComponent implements OnInit {
viewMode = 'single';

// search
searchInProgress: boolean;
query: string;
searchResults: any[];

  constructor(private srv: ChucknorrisService) {
   }

  ngOnInit() {
    this.query = '';
  }

  OnDestroy() {

  }

  runFilter() {
    if (this.query.length >= 3) {

      this.searchInProgress = true;
      this.srv.getList(this.query)
      .subscribe(rez => {
        this.searchResults = rez;
        this.searchInProgress = false;

      });
    }
  }

}
