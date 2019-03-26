import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import { AuthData } from '../../models/auth';

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
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.auth = new AuthData();
  }

  goSignUp()  {
    this.router.navigate(['signup']);
  }

  goMyProject() {
    this.router.navigate(['your']);
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
        } else {
          console.log(rsp['result']);
          this.router.navigate(['your']);
        }
      });
  }

}
