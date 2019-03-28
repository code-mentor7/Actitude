import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import {AllProjects} from '../../models/allprojects';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  showMenu = false;
  project: AllProjects;
  constructor(private router: Router, private pService: ProjectService) { }

  ngOnInit() {
    this.project = this.pService.get();
  }

  goMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

}
