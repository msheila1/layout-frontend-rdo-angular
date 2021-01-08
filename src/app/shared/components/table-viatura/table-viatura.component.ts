import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table-viatura",
  templateUrl: "./table-viatura.component.html",
  styleUrls: ["./table-viatura.component.css"]
})
export class TableViaturaComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";


  constructor() {

  }

  ngOnInit() {

  }

  onClose() {
    this.displayChange.emit(false);
  }
}
