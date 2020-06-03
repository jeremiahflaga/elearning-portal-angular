import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from './_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // TODO: transfer to UserService
  register(user: User) {
        return this.http.post('http://localhost:3030/users/', user);
  }

  login(email, password) {
    return this.http.post<any>('http://localhost:3030/authentication/', { email, password, strategy: 'local' })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            // this.currentUserSubject.next(user);
            return user;
        }));
  }
}
