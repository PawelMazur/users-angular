import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable, Subject, fromEvent } from 'rxjs';
// import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
// import { debounce } from 'lodash';
import { debounceTime, switchMap, map, filter, distinctUntilChanged } from 'rxjs/operators';
import debounce from '../../decorators/debounce.decorator';

@Component({
  selector: 'app-user-search-page',
  templateUrl: './user-search-page.component.html',
  styleUrls: ['./user-search-page.component.scss']
})
export class UserSearchPageComponent implements OnInit{

  user$: Observable<User>;
  subject = new Subject();
  userLogin: String;

  constructor(private serviceUsers: UserService) {
    // this.searchUsers = debounce(this.searchUsers, 1000)
   }

  ngOnInit() {
    
  }

  @debounce(1000)
  searchUsers(userLogin: String) {
      this.user$ = this.serviceUsers.getSearchUsers(userLogin);
  }

  
}
