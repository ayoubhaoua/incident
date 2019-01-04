import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { GetService } from '../get.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() incident:any;
  profs;

  constructor(
    public activeModal: NgbActiveModal,
    private get:GetService
  ) {}

  ngOnInit() {
    this.get.getprofs(this.incident.secteur.id).subscribe(
      (res)=>{
        this.profs=res;
      },
      (err)=>{alert("err lors de la get des professionelle")}
    )
  }

  stringify(a){
    if(a!=null){
    return a.id+" "+a.username;}
    else return "";
  }
  test(){
    this.activeModal.close('Save click')
    if(this.incident.pro!=null){
    let a=this.incident.pro.split(" ")
    this.incident.pro={"id":a[0],"username":a[1]}
    }
  }
  path(){
    return "http://localhost:8080/"+this.incident.image;
  }

}