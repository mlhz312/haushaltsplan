import { TableViewComponent } from './../table-view.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view-edit',
  templateUrl: './table-view-edit.component.html',
  styleUrls: ['./table-view-edit.component.css']
})
export class TableViewEditComponent implements OnInit {

  test = new TableViewComponent();

  constructor() { }

  ngOnInit() {
  }

  performClick() {
    this.test.performAction();
  }

}
