import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-card-deck',
  templateUrl: './course-card-deck.component.html',
  styleUrls: ['./course-card-deck.component.scss']
})
export class CourseCardDeckComponent implements OnInit {

  constructor() { }
  @Input() courses: Course[];
  coursesGroupedByThree: Course[][];

  private static groupByThree(arr: Course[])
  {
    const res = [];
    for (let i = 0; i < arr.length; i = i + 3) {
      res.push(arr.slice(i, i + 3));
    }
    return res;
  }

  ngOnInit(): void {
    this.coursesGroupedByThree = CourseCardDeckComponent.groupByThree(this.courses);
  }
}
