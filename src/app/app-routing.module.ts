import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './user-panel/login-form/login-form.component';
import { RegisterFormComponent } from './user-panel/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './dashboard/panel/panel.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: RegisterFormComponent },
  { path: '', component: HomeComponent },
  { path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
