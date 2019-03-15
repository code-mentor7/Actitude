import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  failedUrl?: string = null;

  constructor(private auth: AuthService, private router: Router) { }

  consumeFailedUrl(): string {
    const url = this.failedUrl;
    this.failedUrl = null;
    return url;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.auth.isAuthenticated()) {
      return Promise.resolve(true);
    }
    if (this.auth.canAutoLogin()) {
      return this.auth.autoLogin()
        .then(() => true)
        .catch(() => {
          this.auth.logout();
          this.failedUrl = state.url;
          this.router.navigate(['/admin/login']);
          return false;
        });
    }
    this.failedUrl = state.url;
    this.router.navigate(['/admin/login']);
    return Promise.resolve(false);
  }

}
