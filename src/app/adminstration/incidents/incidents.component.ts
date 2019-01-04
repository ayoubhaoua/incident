import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  selectedoption ="All";
  filter:"";
  All=false;
  incidents;
  closeResult: string;
  
  constructor(private get:GetService, private modalService: NgbModal ) { }

  ngOnInit() {
    this.all();
    this.etats();
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
    this.get.getall().subscribe(
      (res) => {
        this.incidents=res;
      },
      (err) => {
        alert("err lors de la get des incidents");
      }
    )
  }
  public etats(){
    this.get.getetat().subscribe(
      (res)=> {this.filter=res},
      (err)=> {alert("err lors de Get des prov!!")}
    )
  }

  public open(i){
    const modalRef = this.modalService.open(ModalComponent)
    let j =i.etat;let k=i.motif;let l=i.professionnel;
    modalRef.componentInstance.incident = i;
    modalRef.result.then((result) => {
      this.get.updateincident(i).subscribe(
        (res)=>{
          this.etats();
        },
        (err)=>{
          alert("err lors de la modification");
          i.etat=j;i.motif=k;i.professionnel=l;
        }
    )
    }, (reason) => {
      i.etat=j;i.motif=k;i.professionnel=l;
    });
  }
  del(id){
    this.get.delincident(id).subscribe(
      (res)=> {
        if(res){ this.all()}
        else{alert("err lors de la supprission")}
      },
      (err)=> {alert("err lors de la supprission")}
    )
  }

}
