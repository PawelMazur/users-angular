import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: String;
  @Output() openMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  
  }

  setTitle(title: String){
    this.title = title;
  }

}
