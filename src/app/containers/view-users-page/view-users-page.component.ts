import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements OnInit {

  users$: Observable<User[]>;
  // users: User[];
  // user1: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ =  this.userService.getUsers();
    this.userService.getUsers().subscribe(
      data => console.log(data)
    )
    // this.userService.getUsers().subscribe(
    //   users => {console.log(users); this.users = this.users
    //     this.user1 = this.users[0];
    //     console.log(this.user1);
      
    //   }
    // );

  }
  

}
