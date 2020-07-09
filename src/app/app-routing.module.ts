import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/student-dashboard/pages/dashboard/dashboard.component';
import { CourseDetailsComponent } from './modules/student-dashboard/pages/course-details/course-details.component';
import { ManageSubjectsComponent } from './modules/cms/manage-subjects/manage-subjects.component';
import { AuthGuard } from './auth-guard';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'cms', component: ManageSubjectsComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
