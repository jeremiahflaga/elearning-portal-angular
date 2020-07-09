import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CourseService } from 'src/app/course.service';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let courseServiceMock: any;

  beforeEach(async(() => {
    courseServiceMock = jasmine.createSpyObj('CourseService', ['getCourses']);
    courseServiceMock.getCourses.and.returnValue(of({ data: []}));
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: CourseService, useValue: courseServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an All Courses h4 tag', () => {
    const h4Elem = fixture.debugElement.query(By.css('h4'));
    expect(h4Elem.nativeElement.textContent).toBe('All Courses');
  });
});
