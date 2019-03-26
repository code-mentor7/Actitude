import { Injectable } from '@angular/core';
import { AuthData } from './auth-data';
import { ApiService } from './api/api.service';
import { User } from './models/user';

@Injectable()
export class AuthService {
  status = false;
  constructor(private api: ApiService) { }

  rememberToken(token) {
    localStorage.setItem('ix.token', token);
  }

  getToken() {
    return localStorage.getItem('ix.token');
  }

  getStatus() {
    return this.status;
  }

  isLoggedIn() {
    this.status = true;
  }

}
