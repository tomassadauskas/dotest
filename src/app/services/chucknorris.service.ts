import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class ChucknorrisService {

  private src = 'https://api.chucknorris.io/jokes/';

  constructor(private http: Http) { }

  getResource(target) {
    return this.http.get(this.src + target)
    .map(res => res.json())
    .retry(3);
   }

  getWisdom(filter) {
   return this.http.get(this.src + 'random?category=' + filter)
   .map(res => res.json())
   .retry(3);
  }

  getCategories() {
    return this.http.get(this.src + 'categories')
    .map(res => res.json())
    .retry(3);
  }

  getList(filter) {
    return this.http.get(this.src + 'search?query=' + filter)
    .map(res => res.json())
    .retry(3);
  }
}
