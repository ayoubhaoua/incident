import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Chart} from "angular-highcharts";
import {GetService} from "../../get.service";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit, OnChanges{
  public filter;
  constructor(private get:GetService) { }
  selectedoption: string="All";
  @Input() option:'secteur';

  ngOnInit() {
    this.statall();
      this.get.getprov().subscribe(
        (res)=> {this.filter=res},
        (err)=> {alert("erreure lors de Get des prov!!")}
      )
  }
  ngOnChanges(changes: SimpleChanges) {
   this.statall();
  }
  public chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    }
  });

   statall(){
    this.get.getstatprov(this.selectedoption,this.option).subscribe(
      (res) =>{
        this.chart.removeSerie(0);
        this.chart.addSerie({
            data :  res
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
