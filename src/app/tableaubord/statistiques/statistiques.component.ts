import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {GetService} from "../../get.service";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  public provinces;
  constructor(private get:GetService) { }
  stat: any;
  selectedoption: string="All";

  ngOnInit() {
    this.statall();
      this.get.getall().subscribe(
        (res)=> {this.provinces=res},
        (err)=> {alert("erreure lors de Get!!")}
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
        this.chart.addSerie({
            data: [
              {
                name: 'eau',
                y: res.eau
              },
              {
                name: 'electricite',
                y: res.electricite
              },
              {
                name: 'infrastructure',
                y: res.infrastructure
              }
            ]
          }
          )
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
