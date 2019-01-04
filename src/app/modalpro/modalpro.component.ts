import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { GetService } from '../get.service';


@Component({
  selector: 'app-modalpro',
  templateUrl: './modalpro.component.html',
  styleUrls: ['./modalpro.component.css']
})
export class ModalproComponent implements OnInit {

  @Input() incident:any;

  constructor(
    public activeModal: NgbActiveModal,
    private get:GetService
  ) {}

  ngOnInit() {
   
  }

  test(){
    this.activeModal.close('Save click')
  }
  path(){
    return "http://localhost:8080/"+this.incident.image;
  }

}