import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsComponent } from './manage-subjects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseService } from 'src/app/course.service';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DOMHelper } from 'src/app/testing/dom-helper';

describe('ManageSubjectsComponent', () => {
  let component: ManageSubjectsComponent;
  let fixture: ComponentFixture<ManageSubjectsComponent>;
  let courseServiceMock: any;
  let domHelper: DOMHelper<ManageSubjectsComponent>;

  const sampleSubject = { title: 'sample title', courses: [] };

  beforeEach(async(() => {
    courseServiceMock = jasmine.createSpyObj('CourseService', ['getSubjects']);
    courseServiceMock.getSubjects.and.returnValue(of({ data: [sampleSubject]}));

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
    domHelper = new DOMHelper<ManageSubjectsComponent>(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call selectSubjectToRemove with subject to remove when clicking on the remove subject button in the dropdown', () => {
    const ellipsis = domHelper.findAll('i.fa-ellipsis-v')[0];
    ellipsis.nativeElement.click();
    spyOn(component, 'selectSubjectToRemove');
    domHelper.clickAnchor('Remove');
    expect(component.selectSubjectToRemove).toHaveBeenCalledWith(sampleSubject);
  });
});
