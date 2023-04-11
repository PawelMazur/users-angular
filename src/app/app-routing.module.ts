import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUsersPageComponent } from './containers/view-users-page/view-users-page.component';
import { UserSearchPageComponent } from './containers/user-search-page/user-search-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: ViewUsersPageComponent,
  },
  {
    path: 'search',
    component: UserSearchPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
