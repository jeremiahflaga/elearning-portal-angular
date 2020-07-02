import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = Course.Null;

  constructor() { }

  ngOnInit(): void {
  }

}
