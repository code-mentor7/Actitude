import { Injectable } from '@angular/core';
import {AllProjects} from '../models/allprojects';

@Injectable()
export class ProjectService {

  selectedProject: AllProjects;
  constructor() { }

  set(project) {
    this.selectedProject = project;
  }

  get() {
    return this.selectedProject;
  }
}
