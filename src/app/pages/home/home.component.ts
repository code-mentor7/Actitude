import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBackgroudImage.get().promise()
      .then((res) => console.log('success', res))
      .catch((e) => console.log(e.error));
  }

}
