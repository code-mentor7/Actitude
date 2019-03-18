import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goMenu() {
    this.showMenu = true;
  }

  onCancel() {
    this.showMenu = false;
  }

}
