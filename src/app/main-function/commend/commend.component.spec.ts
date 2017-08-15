import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommendComponent } from './commend.component';

describe('CommendComponent', () => {
  let component: CommendComponent;
  let fixture: ComponentFixture<CommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
