import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewEditComponent } from './table-view-edit.component';

describe('TableViewEditComponent', () => {
  let component: TableViewEditComponent;
  let fixture: ComponentFixture<TableViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
