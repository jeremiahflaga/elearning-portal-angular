import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardDeckComponent } from './course-card-deck.component';

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
});
