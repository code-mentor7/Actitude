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
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAllProjects() {
    this.router.navigate(['all']);
  }

  goCreateProject() {
    this.router.navigate(['create']);
  }

}
