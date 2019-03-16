import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMenu = false;
  constructor(private api: ApiService, private router: Router ) { }

  ngOnInit() {
    this.api.getBackgroudImage.get().promise()
      .then((res) => console.log('success', res))
      .catch((e) => console.log(e.error));
  }

  goMenu() {
    this.showMenu = true;
  }


}
