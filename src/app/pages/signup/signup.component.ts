import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = '';
  password = '';
  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  goAllProject() {
    this.router.navigate(['actitude/all']);
  }

  onSubmit() {

  }
}
