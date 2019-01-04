import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit  {
  title = 'Incident';
  Role = "";
  authenticated=false;
  constructor(private app: AppService, private router:Router ) { }

  ngOnInit() {
    this.app.auth(
      () => {
        this.Role=this.app.Role;
        this.authenticated=this.app.authenticated;
      }
    );
  }

  logout(){
    this.app.logout();
    this.Role=this.app.Role;
    this.authenticated=this.app.authenticated; 
    this.router.navigateByUrl("");
  }

}
