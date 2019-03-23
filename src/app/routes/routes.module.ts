import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {MenuComponent} from '../pages/menu/menu.component';
import {LoginComponent} from '../pages/login/login.component';
import {InterestComponent} from '../pages/interest/interest.component';
import {SignupComponent} from '../pages/signup/signup.component';
import {AllprojectsComponent} from '../pages/allprojects/allprojects.component';
import {YourprojectsComponent} from '../pages/yourprojects/yourprojects.component';
import {CreateprojectComponent} from '../pages/createproject/createproject.component';
import {ProjectdetailComponent} from '../pages/projectdetail/projectdetail.component';

const routes: Routes = [
  // { path: 'actitude', redirectTo: 'actitude/home', pathMatch: 'full' },
  // {
  //   path: 'admin',
  //   // canActivate: [AuthGuardService],
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }}
  //   ]
  // },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'menu', component: MenuComponent, data: { title: 'Menu' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'interest', component: InterestComponent, data: { title: 'Choose Interest' } },
  { path: 'signup', component: SignupComponent, data: { title: 'Sign Up' } },
  { path: 'all', component: AllprojectsComponent, data: { title: 'All Projects' } },
  { path: 'your', component: YourprojectsComponent, data: { title: 'Your Projects' } },
  { path: 'create', component: CreateprojectComponent, data: { title: 'Project Create' } },
  { path: 'detail', component: ProjectdetailComponent, data: { title: 'Project Details' } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutesModule { }
