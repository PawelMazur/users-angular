import { Component, ViewChild, OnInit } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  @ViewChild("appTitle",{read: ToolbarComponent})
  appTitle: ToolbarComponent;
  title = 'Repository';
  
  ngOnInit(): void {
    this.appTitle.setTitle(this.title);
  }


}
