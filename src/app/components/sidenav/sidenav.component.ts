import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getHostElement } from '@angular/core/src/render3';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
  }

  close(){
    document.getElementById("sidenav").style.width = "";
  }

  open(){
    document.getElementById("sidenav").style.width = "300px";
  }

}
