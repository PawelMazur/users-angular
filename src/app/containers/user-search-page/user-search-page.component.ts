import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-search-page',
  templateUrl: './user-search-page.component.html',
  styleUrls: ['./user-search-page.component.scss']
})
export class UserSearchPageComponent implements OnInit {

  user$: Observable<User>;
  userLogin: String;

  constructor(private serviceUsers: UserService) { }

  ngOnInit() {
  
  }

  searchUsers(userLogin: String){
    this.user$ = this.serviceUsers.getSearchUsers(userLogin);    
  }
}
