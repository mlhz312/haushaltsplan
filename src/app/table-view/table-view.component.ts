import { Component, OnInit } from '@angular/core';
import { TableEntry } from './table-entry.module';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  tableViewEntries: TableEntry[] = [];

  constructor() { }

  ngOnInit() {
  }

  performAction() {
    this.tableViewEntries.push(new TableEntry(new Date(), 'test', 20));
    console.log(this.tableViewEntries.length);
  }

}
