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
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goYourProjects() {
    this.router.navigate(['your']);
  }

}
