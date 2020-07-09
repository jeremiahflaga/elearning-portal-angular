import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Course } from '../../../../course';

@Component({
  selector: 'app-course-card-deck',
  templateUrl: './course-card-deck.component.html',
  styleUrls: ['./course-card-deck.component.scss']
})
export class CourseCardDeckComponent implements OnInit, OnChanges {
  @Input() courses: Course[];
  coursesGroupedByThree: Course[][];

  constructor() { }

  private static groupByThree(arr: Course[])
  {
    // append empty Courses if last row has less than three items (might need refactoring later)
    if (arr.length % 3 === 1) {
      arr.push({_id: '', title: '', description: '', image: ''});
      arr.push({_id: '', title: '', description: '', image: ''});
    } else if (arr.length % 3 === 2) {
      arr.push({_id: '', title: '', description: '', image: ''});
    }
    const res = [];
    for (let i = 0; i < arr.length; i = i + 3) {
      res.push(arr.slice(i, i + 3));
    }
    return res;
  }

  ngOnChanges(): void {
    this.coursesGroupedByThree = CourseCardDeckComponent.groupByThree(this.courses);
  }

  ngOnInit(): void {
  }
}
