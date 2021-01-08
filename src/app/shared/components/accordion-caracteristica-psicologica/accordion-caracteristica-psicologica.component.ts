import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CaractAutorPessoaService } from "../../../cadastro/pessoas/caractAutorPessoa.service";

@Component({
  selector: "app-accordion-caracteristica-psicologica",
  templateUrl: "./accordion-caracteristica-psicologica.component.html",
  styleUrls: ["./accordion-caracteristica-psicologica.component.css"]
})
export class AccordionCaracteristicaPsicologiaComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Características Psicológicas - Pessoas
  displayDialogPsicologica = false;
  CaractAutorPessoaService: CaractAutorPessoaService;
  selecionaCaractAutor: any;
  CaractAutor: any;
  tipoCaractAutor: string[] = [];

  constructor() {
    //Dados do Autor - Características Psicológicas
    this.CaractAutorPessoaService = new CaractAutorPessoaService();
  }

  ngOnInit() {
    //Dados do Autor - Características Psicológicas
    this.CaractAutor = this.CaractAutorPessoaService.getCaractAutor();
    this.tipoCaractAutor = this.CaractAutorPessoaService.getTipoCaractAutor();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
