import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/student-dashboard/dashboard/dashboard.component';
import { CourseCardComponent } from './modules/student-dashboard/course-card/course-card.component';
import { CourseCardDeckComponent } from './modules/student-dashboard/course-card-deck/course-card-deck.component';
import { CourseDetailsComponent } from './modules/student-dashboard/course-details/course-details.component';
import { ManageSubjectsComponent } from './modules/cms/manage-subjects/manage-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    CourseCardComponent,
    CourseCardDeckComponent,
    CourseDetailsComponent,
    ManageSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
