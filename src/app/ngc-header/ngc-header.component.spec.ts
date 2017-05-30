import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcHeaderComponent } from './ngc-header.component';

describe('NgcHeaderComponent', () => {
  let component: NgcHeaderComponent;
  let fixture: ComponentFixture<NgcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
