import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcMenuComponent } from './ngc-menu.component';

describe('NgcMenuComponent', () => {
  let component: NgcMenuComponent;
  let fixture: ComponentFixture<NgcMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
