import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './user-panel/login-form/login-form.component';
import { RegisterFormComponent } from './user-panel/register-form/register-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'log-in', component: LoginFormComponent },
  { path: 'sign-up', component: RegisterFormComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
