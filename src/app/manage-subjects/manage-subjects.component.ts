import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {
  subjectForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
        title: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.subjectForm.invalid) {
      return;
    }

    this.courseService.addSubject(this.subjectForm.controls.title.value)
    .pipe(first())
    .subscribe(
        data => {
          console.log('add subject successful');
          this.submitted = true;
        },
        error => {
          console.log('add subject error');
        });
  }
}
