import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chuck-facts-table',
  templateUrl: './chuck-facts-table.component.html',
  styleUrls: ['./chuck-facts-table.component.css']
})
export class ChuckFactsTableComponent implements OnInit {
  @Input('facts') facts; // facts aray comes from parent component as input

  // variable for sorting - declare aray type for aray funcs.
  factsList: any[];

    queryResult: any = {};
    query: any = {
    };

  columns = [
    {},
    { title: 'Fact', key: 'value', isSortable: true },
    { title: 'Category', key: 'category', isSortable: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  sortBy(columnName) {
    console.log('columnName ', columnName);
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.factsList = this.facts;

    if (this.query.isSortAscending) {
      this.sortAsc(columnName);
    }

    if (!this.query.isSortAscending) {
      this.sortDsc(columnName);
    }

    this.facts = this.factsList;

  }

  sortAsc(columnName) {
    this.factsList.sort(function (a, b) {
      var nameA = '';
      var nameB = '';
      if (columnName === 'value') {
        nameA = a.value.toUpperCase(); // ignore upper and lowercase
        nameB = b.value.toUpperCase(); // ignore upper and lowercase
      }

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  sortDsc(columnName) {
    this.factsList.sort(function (a, b) {
      var nameA = '';
      var nameB = '';
      if (columnName === 'value') {
        nameA = a.value.toUpperCase(); // ignore upper and lowercase
        nameB = b.value.toUpperCase(); // ignore upper and lowercase
      }

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    });
  }

}
