import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcConteudoComponent } from './ngc-conteudo.component';

describe('NgcConteudoComponent', () => {
  let component: NgcConteudoComponent;
  let fixture: ComponentFixture<NgcConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
