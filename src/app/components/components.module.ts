import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ToolbarComponent, 
    SidenavComponent, 
    UserDetailComponent
  ],
  exports: [
    ToolbarComponent, 
    SidenavComponent,
    UserDetailComponent
  ]
})
export class ComponentsModule { }
