import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin',
    // canActivate: [AuthGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }}
    ]
  },
  { path: 'admin/login', component: LoginComponent },
  { path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutesModule { }
