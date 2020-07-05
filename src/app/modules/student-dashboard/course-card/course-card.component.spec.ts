import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title of the Course', () => {
    component.course = {_id: '1', title: 'Sample Title', description: '', image: '', modules: []};
    fixture.detectChanges();
    const titleElem = fixture.debugElement.query(By.css('h4.card-title'));
    expect(titleElem.nativeElement.textContent).toBe('Sample Title');
  });

  it('should show description of the Course', () => {
    component.course = {_id: '1', title: 'Course Title', description: 'Sample Description', image: '', modules: []};
    fixture.detectChanges();
    const descriptionElem = fixture.debugElement.query(By.css('p.card-text'));
    expect(descriptionElem.nativeElement.textContent).toBe('Sample Description');
  });

  it('should show image of the Course', () => {
    component.course = {_id: '1', title: '', description: '', image: 'sample.png', modules: []};
    fixture.detectChanges();
    const imageElem = fixture.debugElement.query(By.css('img'));
    expect(imageElem.nativeElement.src).toContain('sample.png');
  });
});
