import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable, Subject, fromEvent } from 'rxjs';
// import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
// import { debounce } from 'lodash';
import { debounceTime, switchMap, map, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-user-search-page',
  templateUrl: './user-search-page.component.html',
  styleUrls: ['./user-search-page.component.scss']
})
export class UserSearchPageComponent implements OnInit{

  user$: Observable<User>;
  subject = new Subject();
  // user: User;
  userLogin: String;
  @ViewChild('boxEl') boxEl: ElementRef;

  constructor(private serviceUsers: UserService) {
    // this.searchUsers = debounce(this.searchUsers, 1000)
   }

  ngOnInit() {
    
  }

  // searchUsers(userLogin: String){
  //   // this.serviceUsers.getSearchUsers(userLogin).subscribe(
  //   //   user => this.user = user
  //   // )
  //   // this.user$ = this.serviceUsers.getSearchUsers(userLogin);    
    
  //   this.subject.next(userLogin)    
  // }

  // searchUsers(userLogin: String) {
  //   this.user$ = this.serviceUsers.getSearchUsers(userLogin);
  // }


  ngAfterViewInit() {
    fromEvent(this.boxEl.nativeElement, 'keyup')
      .pipe(map(e => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(searchTerm => this.serviceUsers.getSearchUsers(searchTerm)
    ))
  }
}
