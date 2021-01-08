import { Counter } from '../shared/models/counter.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of, observable } from 'rxjs';

import { Rdo } from '../models/rdo.model';
import { EstatisticasService } from '../core/services/estatistica.service';
import { AuthService } from '../core/services/auth.service';
import { TipoOcorrencia } from '../models/tipo-ocorrencia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  listOcorrencias: Observable<TipoOcorrencia[]>;

  rdosAbertos: Observable<Rdo[]>;
  rdosOutros: Observable<Rdo[]>;
  rdosGeo: Observable<Rdo[]>;
  rdosApreciacao: Observable<Rdo[]>;
  status: string = 'aberto';

  counterRdosAbertos: Observable<Counter>;
  counterRdosOutros: Observable<Counter>;
  counterRdosGeo: Observable<Counter>;
  counterRdosApreciacao: Observable<Counter>;

  graficoTipoOcorrencia: Observable<any>;

  onStatusChange(status: string): void {
    this.status = status;
  }

  constructor(private estatisticasService: EstatisticasService, private auth: AuthService) {
  }

  ngOnInit() {
    this.graficoTipoOcorrencia = this.estatisticasService.listTipoOcorrenciaByAno('2019');

    this.rdosAbertos = this.estatisticasService.listRdoAberto();
    this.rdosOutros = this.estatisticasService.listRdoOutros();
    this.rdosGeo = this.estatisticasService.listRdoGeo();
    this.rdosApreciacao = this.estatisticasService.listRdoApreciacao();

    this.counterRdosAbertos = this.estatisticasService.countRdoAberto();
    this.counterRdosOutros = this.estatisticasService.countRdoOutros();
    this.counterRdosGeo = this.estatisticasService.countRdoGeo();
    this.counterRdosApreciacao = this.estatisticasService.countRdoApreciacao();
  }
}