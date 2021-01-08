import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbordagemPessoaService } from '../../../cadastro/pessoas/abordagemPessoa.service';


@Component({
  selector: 'app-accordion-abordagem',
  templateUrl: './accordion-abordagem.component.html',
  styleUrls: ['./accordion-abordagem.component.css']
})
export class AccordionAbordagemComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';

  //Abordagem - Pessoas
  displayDialogAbordagem = false;
  AbordagemPessoaService: AbordagemPessoaService;
  selecionaAbordagemAutor: any;
  AbordagemAutor: any;
  tipoAbordagem: string[] = [];

  constructor() {
    //Dados do Autor - Abordagem
    this.AbordagemPessoaService = new AbordagemPessoaService();
  }


  ngOnInit() {
    //Dados do Autor - Abordagem
    this.AbordagemAutor = this.AbordagemPessoaService.getAbordagemAutor();
    this.tipoAbordagem = this.AbordagemPessoaService.getTipoAbordagem();

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
