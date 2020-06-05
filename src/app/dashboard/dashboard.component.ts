import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courseOne: Course = {
    _id: 'courseOne-ID',
    title: 'Course One',
    description: 'Course One Description',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAIAAABr4HqSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnSURBVEhLY3gro0JFNGoc+WjUOPLRqHHko1HjyEejxpGPRpBxMioAgGndz9vd5h8AAAAASUVORK5CYII='
  };
  courses: Course[] = [];
  coursesData: Course[] = [
    this.courseOne,
    {
      _id: '2',
      title: 'Course 2',
      description: 'Course 2 Description',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAIAAABr4HqSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnSURBVEhLY3gro0JFNGoc+WjUOPLRqHHko1HjyEejxpGPRpBxMioAgGndz9vd5h8AAAAASUVORK5CYII='
    },
    {
      _id: '3',
      title: 'Course 3',
      description: 'Course 3 Description',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAIAAABr4HqSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnSURBVEhLY3gro0JFNGoc+WjUOPLRqHHko1HjyEejxpGPRpBxMioAgGndz9vd5h8AAAAASUVORK5CYII='
    },
    {
      _id: '4',
      title: 'Course 4',
      description: 'Course 4 Description',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAIAAABr4HqSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnSURBVEhLY3gro0JFNGoc+WjUOPLRqHHko1HjyEejxpGPRpBxMioAgGndz9vd5h8AAAAASUVORK5CYII='
    }
  ];
  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courses$ = of(this.courses).pipe(first());
    // this.courses$ = this.courseService.getCourses().pipe(first());
    this.courseService.getCourses()
    .pipe(first())
    .subscribe(
        data => {
          console.log('get courses successful');
          this.courses = data.data;
        },
        error => {
          console.log('get courses error');
        });
  }

}
