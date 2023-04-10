import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private PATH_URL = "https://api.github.com";
  // private PATH_URL = "http://localhost:4000";

  constructor(private http: HttpClient) {

  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.PATH_URL}/users`);
  }

  getSearchUsers(userLogin: String): Observable<User>{
    return this.http.get<User>(`${this.PATH_URL}/users/${userLogin}`);
  }
}
