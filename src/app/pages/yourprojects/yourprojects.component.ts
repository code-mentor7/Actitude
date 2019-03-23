import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-yourprojects',
  templateUrl: './yourprojects.component.html',
  styleUrls: ['./yourprojects.component.css']
})
export class YourprojectsComponent implements OnInit {

  list = [
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

  goAllProjects() {
    this.router.navigate(['all']);
  }

  goCreateProject() {
    this.router.navigate(['create']);
  }

  goDetail() {
    this.router.navigate(['detail']);
  }

}
