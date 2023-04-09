import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
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
