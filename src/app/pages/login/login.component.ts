import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import { AuthData } from '../../models/auth';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  showMenu = false;
  auth: AuthData;
  constructor(private router: Router, private api: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.auth = new AuthData();
  }

  goSignUp()  {
    this.router.navigate(['signup']);
  }

  goMyProject() {
    this.router.navigate(['actitude/your']);
  }

  goMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  onSubmit() {
    // username=hz@mlgs.com
    // password=Mind9756
    this.auth.UserName = this.email;
    this.auth.Password = this.password;
    this.api.login.post(this.auth).promise()
      .then(rsp => {
        if (rsp.error) {
          console.log(rsp.error);
          alert('Please try again');
        } else {
          console.log(rsp['result']);
          localStorage.setItem('token', rsp['result']);
          this.authService.isLoggedIn();
          this.router.navigate(['actitude/your']);
        }
      });
  }

}
