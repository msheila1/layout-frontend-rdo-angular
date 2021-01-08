import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panelmenudemo',
  templateUrl: './panelmenudemo.component.html',
  styleUrls: ['./panelmenudemo.component.css']
})
export class PanelmenudemoComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
  }
}


