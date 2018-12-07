import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {GetService} from "../../get.service";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  public filter;
  constructor(private get:GetService) { }
  stat: any;
  selectedoption: string="All";

  ngOnInit() {
    this.statall();
      this.get.getprov().subscribe(
        (res)=> {this.filter=res},
        (err)=> {alert("erreure lors de Get des prov!!")}
      )
  }
  public chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Secteur'
    },
    credits: {
      enabled: false
    }
  });
   statall(){
    this.get.getstatprov(this.selectedoption).subscribe(
      (res) =>{
        this.stat=res;
        this.chart.removeSerie(0);
        this.chart.addSerie({
            data :  this.stat
          })
      } ,
      (err) => {
        alert("ereure hors de la reception des statistiques");
      }
    )
  }


  public selected(option){
    this.selectedoption=option;
    this.statall();
    console.log(option);
  }
}
