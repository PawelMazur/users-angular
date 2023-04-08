import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FindUserPageComponent } from './containers/find-user-page/find-user-page.component';
import { ViewUsersPageComponent } from './containers/view-users-page/view-users-page.component';
import { UserSearchPageComponent } from './containers/user-search-page/user-search-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FindUserPageComponent,
    ViewUsersPageComponent,
    UserSearchPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
