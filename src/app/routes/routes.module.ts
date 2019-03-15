import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';

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
