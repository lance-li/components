import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetoggleComponent } from './slide-toggle.component';

describe('SlidetoggleComponent', () => {
  let component: SlidetoggleComponent;
  let fixture: ComponentFixture<SlidetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
