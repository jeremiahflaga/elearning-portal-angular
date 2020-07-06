import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsComponent } from './manage-subjects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseService } from 'src/app/course.service';
import { Observable, of } from 'rxjs';

describe('ManageSubjectsComponent', () => {
  let component: ManageSubjectsComponent;
  let fixture: ComponentFixture<ManageSubjectsComponent>;
  let courseServiceMock: any;

  beforeEach(async(() => {
    courseServiceMock = jasmine.createSpyObj('CourseService', ['getSubjects']);
    courseServiceMock.getSubjects.and.returnValue(of({ data: []}));
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsComponent ],
      imports: [
        MDBBootstrapModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: CourseService, useValue: courseServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
