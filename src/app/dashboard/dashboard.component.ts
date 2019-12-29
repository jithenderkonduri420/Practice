import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit() {
    const decoded = jwt_decode(JSON.parse(localStorage.getItem('currentUser')).token);
    this.user = decoded;
  }
}
