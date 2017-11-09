import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chuck-facts-single',
  templateUrl: './chuck-facts-single.component.html',
  styleUrls: ['./chuck-facts-single.component.css']
})
export class ChuckFactsSingleComponent implements OnInit {
  @Input('facts') facts;

  active: number;

  constructor() { }

  ngOnInit() {
    this.active = 0;
  }

}
