import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { AbstractService, listBy, countBy } from "./abstract.service";
import { Rdo } from '../../models/rdo.model';
import { Counter } from '../../shared/models/counter.model';
import { AuthService } from '../services/auth.service'
import { EstatisticaTipoOcorrencia } from '../../models/estatistica-tipo-ocorrencia.model';
import { EstatisticaTipoOcorrenciaReferencia } from 'src/app/models/estatistica-tipo-ocorrencia-referencia.model';

@Injectable({
  providedIn: "root"
})
export class EstatisticasService {
  constructor(private http: HttpClient) { }

  listRdoAberto(): Observable<Rdo[]> {
    return this.listByStatus('aberto');
  }

  listRdoOutros(): Observable<Rdo[]> {
    return this.listByStatus('outros');
  }

  listRdoGeo(): Observable<Rdo[]> {
    return this.listByStatus('geo');
  }

  listRdoApreciacao(): Observable<Rdo[]> {
    return this.listByStatus('apreciacao');
  }

  countRdoAberto(): Observable<Counter> {
    return this.countByStatus('aberto');
  }

  countRdoOutros(): Observable<Counter> {
    return this.countByStatus('outros');
  }

  countRdoGeo(): Observable<Counter> {
    return this.countByStatus('geo');
  }

  countRdoApreciacao(): Observable<Counter> {
    return this.countByStatus('apreciacao');
  }


  private listByStatus(status: string): Observable<Rdo[]> {
    return listBy(this.http, this.endpoint, new HttpParams({
      fromObject: {
        status
      }
    }));
  }

  private countByStatus(status: string): Observable<Counter> {
    return countBy(this.http, `${AbstractService.baseUrl}estatisticas/counts`, new HttpParams({
      fromObject: {
        status
      }
    }));
  }

  public listTipoOcorrenciaByAno(ano: string): Observable<any> {
    return listBy(this.http, `${this.endpoint}/tipos-ocorrencias`, new HttpParams({
      fromObject: {
        ano: ano
      }
    })).pipe(
      map((estatisticas: EstatisticaTipoOcorrencia[]) => {
        const datasets: any[] = [];
        estatisticas.forEach((estatistica) => {
          datasets.push({
            label: estatistica.descricao,
            fill: false,
            borderColor: this.createBorderColor(estatistica.descricao),
            data: this.extractValues(estatistica.referencias)
          });
        });

        return {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          datasets: datasets
        };
      })
    );
  }

  private createBorderColor(descricao: string): string {
    if ('Homicídio Doloso' === descricao) {
      return '#e59400';
    } else if ('Homicídio Culposo' === descricao) {
      return '#e53e00';
    } else if ('Latrocínio' === descricao) {
      return '#a01f1f';
    } else if ('Roubo de Veículo' === descricao) {
      return '#1b81e5';
    } else if ('Roubo - Outros' === descricao) {
      return '#3f75a2';
    } else if ('Furto de Veículo' === descricao) {
      return '#007373';
    } else if ('Furto - Outros' === descricao) {
      return '#5c5c5c';
    }

  }

  private extractValues(referencias: EstatisticaTipoOcorrenciaReferencia[]): number[] {
    const data: number[] = [];

    referencias.forEach(referencia => {
      if (referencia.mes - 1 != data.length) {
        data.push(0);
      }
      data.push(referencia.quantidade);
    });
    return data;
  }

  private get endpoint(): string {
    return `${AbstractService.baseUrl}estatisticas`;
  }
}