import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  // TODO: transfer to UserService
  getCourses(): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get('http://localhost:3030/courses/', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${currentUser.accessToken}`
      })
    });
  }
}
