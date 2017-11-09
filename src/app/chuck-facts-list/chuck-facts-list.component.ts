import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chuck-facts-list',
  templateUrl: './chuck-facts-list.component.html',
  styleUrls: ['./chuck-facts-list.component.css']
})
export class ChuckFactsListComponent implements OnInit {
  @Input('facts') facts;

  constructor() { }

  ngOnInit() {
  }

}
