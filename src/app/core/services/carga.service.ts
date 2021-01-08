import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractService, listBy, create, update, destroy, findBy } from './abstract.service';
import * as _ from 'lodash';
import { Carga } from 'src/app/models/carga.model';



@Injectable({
  providedIn: 'root'
})
export class CargaService extends AbstractService<Carga, number> {

  constructor(protected _http: HttpClient) {
    super('carga', _http);
  }


  findCargaById(id): Observable<Carga>  {

    let param = new HttpParams();
    param = param.append("id", id);

    return findBy(this._http, `${AbstractService.baseUrl}get-carga`, param);
  }
  
  update(carga: Carga): Observable<Carga>{
    return update(this._http, `${AbstractService.baseUrl}editar-carga`, carga);
  }

  public listByCarga(): Observable<Carga[]> {
    return listBy(this._http, `${AbstractService.baseUrl}list-carga`, new HttpParams());
  }

  public create(carga: Carga): Observable<Carga>{
    return create(this._http, `${AbstractService.baseUrl}carga`, carga);
  }

  //public update(id): Observable<Carga>{
  //  return update(this._http, `${AbstractService.baseUrl}carga` + id, new Carga());
  //}

  public delete(id) {
    return destroy(this._http, `${AbstractService.baseUrl}carga` + id, new HttpParams());
  }
}
