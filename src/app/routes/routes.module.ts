import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {MenuComponent} from '../pages/menu/menu.component';
import {LoginComponent} from '../pages/login/login.component';

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
