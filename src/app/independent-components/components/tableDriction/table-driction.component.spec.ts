import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDrictionComponent } from './table-driction.component';

describe('TableDrictionComponent', () => {
  let component: TableDrictionComponent;
  let fixture: ComponentFixture<TableDrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
