import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  showMenu = false;
  constructor() { }

  goMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  ngOnInit() {
  }

}
