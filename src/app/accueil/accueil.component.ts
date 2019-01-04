import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title = 'Incident';
  constructor(private app:AppService ) { }

  ngOnInit() {
    console.log(this.app.authenticated);
  }
}
