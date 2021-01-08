import { InstrumentoVeiculoService } from './instrumentoVeiculo.service';
import { AcionamentoVeiculoService } from './acionamentoVeiculo.service';
import { AcessoVeiculoService } from './acessoVeiculo.service';
import { SegurancaVeiculoService } from './segurancaVeiculo.service';
import { VeiculoService } from './veiculo.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  //Veículo
  displayDialogVeiculo = false;
  VeiculoService: VeiculoService;
  selecionaVeiculo: any;
  Veiculos: any;
  PlacaVeiculo: string[] = [];
  ChassisVeiculo: string[] = [];
  OcorrenciaVeiculo: string[] = [];
  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';
  items: any;

  //Veículo - Segurança
  SegurancaVeiculoService: SegurancaVeiculoService;
  selecionaSeguranca: any;
  SegurancaVeiculo: any;
  seguranca: string[] = [];

  //Veículo - Acesso
  AcessoVeiculoService: AcessoVeiculoService;
  selecionaAcesso: any;
  AcessoVeiculo: any;
  acesso: string[] = [];

  //Veículo - Acionamento
  AcionamentoVeiculoService: AcionamentoVeiculoService;
  selecionaAcionamento: any;
  AcionamentoVeiculo: any;
  acionamento: string[] = [];

  //Veículo - Intrumentos
  InstrumentoVeiculoService: InstrumentoVeiculoService;
  selecionaInstrumentosVeiculo: any;
  instrumentosVeiculo: any;
  tipoInstrumentoVeiculo: string[] = [];
  caractInstrumentoVeiculo: string[] = [];

  constructor() {
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});
    //Veiculos
    this.VeiculoService = new VeiculoService();
    //Veiculos - Segurança
    this.SegurancaVeiculoService = new SegurancaVeiculoService();
    //Veiculos - Acesso
    this.AcessoVeiculoService = new AcessoVeiculoService();
    //Veiculos - Acionamento
    this.AcionamentoVeiculoService = new AcionamentoVeiculoService();
    //Veiculos - Instrumentos
    this.InstrumentoVeiculoService = new InstrumentoVeiculoService();
   }

  ngOnInit() {
    //Veículos
    this.Veiculos = this.VeiculoService.getVeiculos();
    this.PlacaVeiculo = this.VeiculoService.getPlacaVeiculo();
    this.ChassisVeiculo = this.VeiculoService.getChassisVeiculo();
    this.OcorrenciaVeiculo = this.VeiculoService.getOcorrenciaVeiculo();

    //Veículos - Segurança
    this.SegurancaVeiculo = this.SegurancaVeiculoService.getSegurancaVeiculo();
    this.seguranca = this.SegurancaVeiculoService.getSeguranca();

    //Veículos - Acesso
    this.AcessoVeiculo = this.AcessoVeiculoService.getAcessoVeiculo();
    this.acesso = this.AcessoVeiculoService.getAcesso();

    //Veículos - Acionamento
    this.AcionamentoVeiculo = this.AcionamentoVeiculoService.getAcionamentoVeiculo();
    this.acionamento = this.AcionamentoVeiculoService.getAcionamento();
    
    //Veículos - Instrumentos
    this.instrumentosVeiculo = this.InstrumentoVeiculoService.getInstrumentosVeiculo();
    this.tipoInstrumentoVeiculo = this.InstrumentoVeiculoService.getTipoInstrumentoVeiculo();
    this.caractInstrumentoVeiculo = this.InstrumentoVeiculoService.getCaractInstrumentoVeiculo();

    //Botões Ações 
        this.items = [
          {label: 'Editar', icon: 'fa fa-edit', command: () => {
            this.editar();
        }},
          {label: 'Excluir', icon: 'fa fa-close',routerLink: ['/setup']}
        ];
  }
  
  editar() {
    this.displayDialogVeiculo = true;};
}
