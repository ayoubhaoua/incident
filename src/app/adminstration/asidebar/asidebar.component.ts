import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {
  @Output()
  switching = new EventEmitter();
  switchf:boolean;
  constructor() { }

  ngOnInit() {
  }

  valuechanged(){
    if(this.switchf)
      this.switching.emit("professionnels");
    else
     this.switching.emit("incidents");
  }
}
