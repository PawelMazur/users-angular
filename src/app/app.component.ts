import { Component, ViewChild, OnInit } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Repository';
  toggle = true;

  @ViewChild("appTitle",{read: ToolbarComponent})
  appTitle: ToolbarComponent;

  @ViewChild('appSidenav', {read: SidenavComponent})
  appSidenav: SidenavComponent;
  
  ngOnInit(): void {
    this.appTitle.setTitle(this.title);
  }

  toggleMenu(){
    console.log("zzz");
    this.appSidenav.toggle();
  }

  
  // toggleMenu() {this.toggle = !this.toggle};

  // menu(event: any){
  //   if (this.toggle){
  //     this.appSidenav.open();
  //   } else {
  //     this.appSidenav.close();
  //   }
  // }

}
