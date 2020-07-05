import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardDeckComponent } from './course-card-deck.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Course } from 'src/app/course';

describe('CourseCardDeckComponent', () => {
  let component: CourseCardDeckComponent;
  let fixture: ComponentFixture<CourseCardDeckComponent>;

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardDeckComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // https://medium.com/better-programming/testing-angular-components-with-input-3bd6c07cfaf6
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty list when no courses available', () => {
    const courseCards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(courseCards.length).toBe(0);
  });

  it('should show one VISIBLE list item when one course is given', () => {
    testHostComponent.courses = [{_id: '1', title: '', description: '', image: '', modules: []}];
    testHostFixture.detectChanges();
    const courseCards = testHostFixture.debugElement.queryAll(By.css('app-course-card.visible'));
    expect(courseCards.length).toBe(1);
  });

  it('should show two INVISIBLE list item when one course is given', () => {
    testHostComponent.courses = [{_id: '1', title: '', description: '', image: '', modules: []}];
    testHostFixture.detectChanges();
    const courseCards = testHostFixture.debugElement.queryAll(By.css('app-course-card.invisible'));
    expect(courseCards.length).toBe(2);
  });

  it('should show five items when five courses are given', () => {
    const courses = [];
    for (let index = 0; index < 5; index++) {
      courses.push({_id: index.toString(), title: '', description: '', image: '', modules: []});
    }
    testHostComponent.courses = courses;
    testHostFixture.detectChanges();
    const courseCards = testHostFixture.debugElement.queryAll(By.css('app-course-card.visible'));
    expect(courseCards.length).toBe(5);
  });

  @Component({
    selector: `app-test-host-component`,
    template: `<app-course-card-deck [courses]="courses"></app-course-card-deck>`
  })
  class TestHostComponent {
    courses: Course[] = [];
  }
});
