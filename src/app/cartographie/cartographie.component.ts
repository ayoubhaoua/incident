import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetService} from "../get.service";
import {Incident} from "../model/incident";

declare let L;

@Component({
  selector: 'app-cartographie',
  templateUrl: './cartographie.component.html',
  styleUrls: ['./cartographie.component.css']
})
export class CartographieComponent implements OnInit {
  list_incident: any[];

  constructor(private getser: GetService) {
  }

  ngOnInit() {

    const map = L.map('map').setView([33, -7], 6);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //    L.esri.basemapLayer("Topographic").addTo(map);
    this.get_products(map);
  }

  get_products(map) {
    this.getser.getall().subscribe(
      (res) => {
        this.list_incident = res;
        this.markers(map);
      },
      (err) => {
        alert("erreur lors de la get des incident");
      }
    );
  }

  markers(map) {
    var marker;
    for (var i = 0; i < this.list_incident.length; i++) {
      marker = L.marker([this.list_incident[i].lat, this.list_incident[i].lon]).addTo(map);
      marker.bindPopup('secteur:'+this.list_incident[i].secteur+'</br>type:'+this.list_incident[i].type+'</br>');
    }
  }
}


