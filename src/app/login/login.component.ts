import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../auth-data';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../routes/guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFail = false;

  constructor(private auth: AuthService, private authGuard: AuthGuardService, private router: Router) { }

  onLogin(auth: AuthData) {
    this.auth.login(auth)
      .then(() => this.loginFail = false)
      .then(() => {
        const failedUrl = this.authGuard.consumeFailedUrl();
        if (failedUrl === null) {
          this.router.navigate(['admin/dashboard']);
        } else {
          this.router.navigate([failedUrl]);
        }
      })
      .catch(() => this.loginFail = true)
      ;
  }

  ngOnInit() {
    if (this.auth.isAuthenticated() || this.auth.canAutoLogin()) {
      this.router.navigate(['admin/dashboard']);
    }
  }

}
