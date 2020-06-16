import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../course';
import { switchMap, first } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '../../../course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    );
  }
}
