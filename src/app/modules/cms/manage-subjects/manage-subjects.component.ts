import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../course.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first, concatMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {
  subjectForm: FormGroup;
  submitted = false;
  subjectsData$: Observable<any>;
  selectedSubjectIdToRemove: any;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
        title: ['', Validators.required]
    });

    this.subjectsData$ = this.courseService.getSubjects();
  }

  selectSubjectToRemove(subjectToRemove: any) {
    this.selectedSubjectIdToRemove = subjectToRemove._id;
  }

  unselectSubjectToRemove() {
    this.selectedSubjectIdToRemove = null;
  }

  removeSelectedSubject(): void {
    this.subjectsData$ = this.courseService.removeSubject(this.selectedSubjectIdToRemove)
      .pipe(
        concatMap(() => this.courseService.getSubjects())
      );
  }

  // https://angular.io/guide/template-syntax#ngfor-with-trackby
  trackBySubjects(index: number, subject: any): number { return subject._id; }

  onSubmit() {
    this.submitted = true;

    if (this.subjectForm.invalid) {
      return;
    }

    this.subjectsData$ = this.courseService.addSubject(this.subjectForm.controls.title.value)
      .pipe(
        concatMap(() => this.courseService.getSubjects()),
        finalize(() => this.submitted = false)
      );
  }
}
