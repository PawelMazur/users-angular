import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: String;

  constructor() { }

  ngOnInit() {
  
  }

  setTitle(title: String){
    this.title = title;
  }

}
