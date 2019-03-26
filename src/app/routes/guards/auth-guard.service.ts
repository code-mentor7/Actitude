import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import {AuthService} from '../../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const flag = this.authService.getStatus();
    if (flag) {
      return true;
    } else {
      alert('You don\'t have permission to view this page');
      this.router.navigate(['home']);
      return false;
    }
  }
}
