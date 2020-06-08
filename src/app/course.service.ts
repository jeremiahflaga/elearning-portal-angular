import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  currentUser;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getCourse(id: string): Observable<any> {
    return this.http.get(`http://localhost:3030/courses/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.currentUser.accessToken}`,
      }),
    });
  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:3030/courses/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.currentUser.accessToken}`,
      }),
    });
  }

  getSubjects(): Observable<any> {
    return this.http.get('http://localhost:3030/subjects/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.currentUser.accessToken}`,
      }),
    });
  }

  addSubject(subject: string): Observable<any> {
    return this.http.post(
      'http://localhost:3030/subjects/',
      {
        title: subject,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.currentUser.accessToken}`,
        }),
      }
    );
  }
}
