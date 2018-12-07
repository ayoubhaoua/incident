import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Incident';
  Role = "";
  authenticated=false;
  constructor(private app: AppService) { }

  ngOnInit() {
    this.Role=this.app.Role;
    this.authenticated=this.app.authenticated;
    console.log(this.Role);
  }

}
