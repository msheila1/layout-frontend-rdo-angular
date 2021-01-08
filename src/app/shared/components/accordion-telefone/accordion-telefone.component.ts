import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TelefoneAutorService } from '../../../cadastro/pessoas/telefoneAutor.service';
import { RuidosAutorService } from '../../../cadastro/pessoas/ruidosPessoa.service';

@Component({
  selector: 'app-accordion-telefone',
  templateUrl: './accordion-telefone.component.html',
  styleUrls: ['./accordion-telefone.component.css']
})
export class AccordionTelefoneComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';

  //Dados do Autor - Telefone - Pessoas
  displayDialogTelefoneAutor = false;
  TelefoneAutorService: TelefoneAutorService;
  selecionaTelefoneAutor: any;
  TelefoneAutor: any;
  tipoAutor: string[] = [];
  dddAutor: string[] = [];
  numeroAutor: string[] = [];

  //Ruídos - Pessoas
  displayDialogRuido = false;
  RuidosAutorService: RuidosAutorService;
  selecionaRuidoAutor: any;
  RuidosAutor: any;
  tipoRuido: string[] = [];

  constructor() {
    //Dados do Autor - Telefone
    this.TelefoneAutorService = new TelefoneAutorService();
    //Dados do Autor - Ruidos
    this.RuidosAutorService = new RuidosAutorService();
  }


  ngOnInit() {
    //Dados do Autor - Telefone
    this.TelefoneAutor = this.TelefoneAutorService.getTelefoneAutor();
    this.tipoAutor = this.TelefoneAutorService.getTipoAutor();
    this.dddAutor = this.TelefoneAutorService.getDddAutor();
    this.numeroAutor = this.TelefoneAutorService.getNumeroAutor();

    //Dados do Autor - Ruídos
    this.RuidosAutor = this.RuidosAutorService.getRuidosutor();
    this.tipoRuido = this.RuidosAutorService.getTipoRuido();

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
