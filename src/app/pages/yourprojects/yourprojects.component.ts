import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AllProjects} from '../../models/allprojects';
import {ApiService} from '../../api/api.service';
import {ProjectService} from '../../service/project.service';

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
  allProjects: AllProjects[] = [];
  constructor(private router: Router, private api: ApiService, private pService: ProjectService) { }

  ngOnInit() {
    this.api.getAllProjects.get().promise()
      .then(rsp => {
        console.log(rsp['ActProjects']);
        this.allProjects = rsp['ActProjects'];
      });
  }

  goMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  goAllProjects() {
    this.router.navigate(['actitude/all']);
  }

  goCreateProject() {
    this.router.navigate(['actitude/create']);
  }

  goDetail(project: AllProjects) {
    const goProject = this.pService.set(project);
    this.router.navigate(['actitude/detail']);
  }

}
