import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import * as debounceFn from 'lodash.debounce';

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users$ =  this.userService.getUsers();
    // this.userService.getUsers().subscribe(
    //   data => console.log(data)
    // )
  }
  

}
