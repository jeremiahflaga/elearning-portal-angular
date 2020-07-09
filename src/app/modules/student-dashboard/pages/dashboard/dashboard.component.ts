import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../course';
import { CourseService } from '../../../../course.service';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses$: Observable<any>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }
}
