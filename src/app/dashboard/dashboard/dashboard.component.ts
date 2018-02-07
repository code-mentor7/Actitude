import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  statistics = [];
  userCount = 0;
  deviceCount = 0;
  licenseCount = 0;
  venueCount = 0;
  label = [
    'User',
    'Device',
    'License',
    'Venue',
  ];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.api.mobikiStatistics.get().promise()
      .then(res => {
        this.statistics = res;
        this.userCount = res[0].user;
        this.deviceCount = res[0].device;
        this.licenseCount = res[0].license;
        this.venueCount = res[0].venue;
        this.pushData();
      })
      .catch(e => console.log('error'));
  }

  pushData() {
    this.data = {
      labels: this.label,
      datasets: [
        {
          data: [this.userCount, this.deviceCount, this.licenseCount, this.venueCount],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#00E673'],
          borderWidth: 0,
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#00E673']
        }
      ]
    };
  }
}
