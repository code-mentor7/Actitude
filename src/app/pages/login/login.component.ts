import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {
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

  }

}
