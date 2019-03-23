import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit {

  list = [
    {name: 'Hello'},
    {name: 'Hello'},
    {name: 'Hello'},
    {name: 'Hello'},
    {name: 'Hello'}
  ];
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

  goYourProjects() {
    this.router.navigate(['your']);
  }

  goDetail() {
    this.router.navigate(['detail']);
  }

}
