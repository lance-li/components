import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiFunctionComponent } from './main-function.component';

describe('MaiFunctionComponent', () => {
  let component: MaiFunctionComponent;
  let fixture: ComponentFixture<MaiFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
