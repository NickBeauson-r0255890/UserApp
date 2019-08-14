import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { USERS } from './mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/Controller';
  // private usersUrl = 'http://localhost:8080/GetUsers';
  // private usersUrl = '/assets/data/users.json';

  constructor(private http: HttpClient) {} // instantie van httpClient

  getUsers(): Observable<User[]> {
    // this.http.get(this.usersUrl).toPromise().then(data => { alert(data.toString()); });

    return this.http.get<User[]>(this.usersUrl);  // User[]-> cast naar array van users
  }



/*
  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  constructor() {}
*/
 /* constructor(private http: HttpClient) {
  }

 // private userUrl = 'api/users';   //URL to web api*/

}
