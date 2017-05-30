import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngc-header',
  templateUrl: './ngc-header.component.html',
  styleUrls: ['./ngc-header.component.css']
})
export class NgcHeaderComponent implements OnInit {


  @Output() changeTheme = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){
    this.changeTheme.emit();
  }

}
