import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/student-dashboard/dashboard/dashboard.component';
import { CourseDetailsComponent } from './modules/student-dashboard/course-details/course-details.component';
import { ManageSubjectsComponent } from './modules/cms/manage-subjects/manage-subjects.component';


const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'cms', component: ManageSubjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
