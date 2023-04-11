import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewUsersPageComponent } from './containers/view-users-page/view-users-page.component';
import { UserSearchPageComponent } from './containers/user-search-page/user-search-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ViewUsersPageComponent,
    UserSearchPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
