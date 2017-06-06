import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcInputComponent } from './ngc-input.component';

describe('NgcInputComponent', () => {
  let component: NgcInputComponent;
  let fixture: ComponentFixture<NgcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
