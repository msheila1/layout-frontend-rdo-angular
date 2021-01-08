import { Usuario } from 'src/app/models/usuario.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractService, listBy, findBy, create} from './abstract.service';
import { Plantao } from '../../models/plantao.model';
import * as _ from 'lodash';
import { Plantonista } from 'src/app/models/plantonista.model';
import { Delegacia } from 'src/app/models/delegacia.model';

@Injectable({
  providedIn: 'root'
})
export class PlantaoService extends AbstractService<Plantao, number> {

  teste; users; users2; usersAtual; usersAtual2; userPlantonista; model: any;

  constructor(protected http: HttpClient) {
    super('plantoes', http);
  }

  findPlantaoAtual(): Observable<Plantao> {
    return this.PlantaoAtual();
  }

  public PlantaoAtual(): Observable<Plantao> {
    return findBy(this.http, `${AbstractService.baseUrl}plantao`, new HttpParams());
  }

  findPlantaoAnterior(): Observable<Plantao> {
    return this.PlantaoAnterior();
  }

  public PlantaoAnterior(): Observable<Plantao> {
    return findBy(this.http, `${AbstractService.baseUrl}plantao-anterior`, new HttpParams());
  }

  public listByUsuarioPlantaoAnterior(): Observable<Plantonista[]> {
    return listBy(this.http, `${AbstractService.baseUrl}list-plantonistas-by-plantao`, new HttpParams());
  }

  listMovimentacaoAtual(): Observable<Plantao> {
    return this.listByPlantaoAtual();
  }

  public listByPlantaoAtual(): Observable<Plantao> {
    return findBy(this.http, `${AbstractService.baseUrl}plantao-atual`, new HttpParams());
  }

  public listByPlantonistas(): Observable<Plantonista[]> {
    return listBy(this.http, `${AbstractService.baseUrl}list-plantonistas-atual`, new HttpParams());
  }

  public listPlantonistas(): Observable<Plantonista[]> {
    return listBy(this.http, `${AbstractService.baseUrl}plantonistas`, new HttpParams());
  }

  public listPlantonistasAtivos(): Observable<Plantonista[]> {
    return listBy(this.http, `${AbstractService.baseUrl}plantonistas`, new HttpParams());
  }

  listDelegacia(): Observable<Delegacia[]> {//Delegacia dos plantoes? deveria estar em delegacia service???
    return this.listByDelegaciaDialog();
  }

  private listByDelegaciaDialog(): Observable<Delegacia[]> {
    return listBy(this.http, `${AbstractService.baseUrl}list-delegacia`, new HttpParams());
  }

  public saveIntercorrencia(): Observable<Plantao>{
    return create(this.http, `${AbstractService.baseUrl}intercorrencia-plantao`, new Plantao());
  }

}
