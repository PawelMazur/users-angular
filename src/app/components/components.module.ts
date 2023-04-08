import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    ToolbarComponent, 
    SidenavComponent
  ]
})
export class ComponentsModule { }
