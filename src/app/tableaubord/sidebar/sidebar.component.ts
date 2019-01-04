import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
   switching = new EventEmitter();
   switchf:boolean;
  constructor() { }

  ngOnInit() {
  }

  valuechanged(){
    if(this.switchf)
      this.switching.emit("type");
    else
     this.switching.emit("secteur");
  }

}
