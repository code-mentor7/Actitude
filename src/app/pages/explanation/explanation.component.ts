import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit {

  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goMenu() {
    this.showMenu = true;
  }

  goSignUp() {
    this.router.navigate(['signup']);
  }

  closeMenu() {
    this.showMenu = false;
  }
}
