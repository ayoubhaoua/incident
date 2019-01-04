import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';
import { AppService } from '../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalproComponent } from '../modalpro/modalpro.component';

@Component({
  selector: 'app-mesincident',
  templateUrl: './mesincident.component.html',
  styleUrls: ['./mesincident.component.css']
})
export class MesincidentComponent implements OnInit {

  selectedoption ="All";
  All=false;
  incidents;

  constructor( private get:GetService, private app:AppService, private modalService: NgbModal) { }

  ngOnInit() {
    this.app.auth(
      () => {
        this.all();
      }
    );
  }

  public selected(option){
    if(option!="All"){
      this.selectedoption=option;
      this.All=true;
      }
    else{
      this.All=false;
    }
  }
  public all(){
    console.log(this.app.username);
    this.get.getallbypro(this.app.username).subscribe(
      (res) => {
        this.incidents=res;
      },
      (err) => {
        alert("err lors de la get des incidents");
      }
    )
  }

  public open(i){
    const modalRef = this.modalService.open(ModalproComponent)
    let j =i.etat;let k=i.motif;
    modalRef.componentInstance.incident = i;
    modalRef.result.then((result) => {
      i.pro={"id":i.pro.id};
      this.get.updateincident1(i).subscribe(
        (res)=>{
        },
        (err)=>{
          alert("err lors de la modification");
          i.etat=j;i.motif=k;
        }
    )
    }, (reason) => {
      i.etat=j;i.motif=k;
    });
  }

}
