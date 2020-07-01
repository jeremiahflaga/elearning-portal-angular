import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsComponent } from './manage-subjects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

describe('ManageSubjectsComponent', () => {
  let component: ManageSubjectsComponent;
  let fixture: ComponentFixture<ManageSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsComponent ],
      imports: [
        MDBBootstrapModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
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
