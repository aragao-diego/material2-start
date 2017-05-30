import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngc-menu',
  templateUrl: './ngc-menu.component.html',
  styleUrls: ['./ngc-menu.component.css']
})
export class NgcMenuComponent implements OnInit {
  items = [{type: 'link', label: 'Teste', icon: 'email'}];

  constructor() { }

  ngOnInit() {
  }

}
