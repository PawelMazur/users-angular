import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-100%)'}),
        group([
          animate('0.3s ease', style({
            transform: 'translateX(0)',
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave' ,  [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(-100%)',
          })),
          animate('0.3s ease', style({
            opacity: 0
          }))
        ])
      ]),
    ]),
  ],
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  isOpen = false;

  toggle() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
      
  }

  // close(){
  //   document.getElementById("sidenav").style.width = "";
  // }

  // open(){
  //   document.getElementById("sidenav").style.width = "300px";
  // }

}
