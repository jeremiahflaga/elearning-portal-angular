import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardDeckComponent } from './course-card-deck.component';
import { By } from '@angular/platform-browser';

describe('CourseCardDeckComponent', () => {
  let component: CourseCardDeckComponent;
  let fixture: ComponentFixture<CourseCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty list when no courses available', () => {
    const courseCards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(courseCards.length).toBe(0);
  });

  it('should show one list item when one course is given', () => {
    component.coursesGroupedByThree = [[{_id: '1', title: '', description: '', image: '', modules: []}]];
    fixture.detectChanges();
    const courseCards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(courseCards.length).toBe(1);
  });
});
