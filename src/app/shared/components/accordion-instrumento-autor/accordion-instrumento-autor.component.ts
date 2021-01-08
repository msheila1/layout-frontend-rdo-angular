import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstrumentoAutorService } from '../../../cadastro/pessoas/instrumentoPessoa.service';

@Component({
  selector: 'app-accordion-instrumento-autor',
  templateUrl: './accordion-instrumento-autor.component.html',
  styleUrls: ['./accordion-instrumento-autor.component.css']
})
export class AccordionInstrumentoAutorComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogInstrumentoVeiculo = false;

  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';

  //Instrumentos - Pessoas
  displayDialogInstrumento = false;
  InstrumentoAutorService: InstrumentoAutorService;
  selecionaInstrumentoAutor: any;
  InstrumentoAutor: any;
  tipoInstrumento: string[] = [];

  constructor() {
  //Dados do Autor - Instrumentos
    this.InstrumentoAutorService = new InstrumentoAutorService();
  }

  ngOnInit() {

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
