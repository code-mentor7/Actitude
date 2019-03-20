import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
