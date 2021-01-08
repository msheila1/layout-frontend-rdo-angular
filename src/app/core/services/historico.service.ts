import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { AbstractService, create } from "./abstract.service";
import { Historico } from 'src/app/models/historico.model';


@Injectable({
  providedIn: "root"
})

export class HistoricoService extends AbstractService<Historico, number>{
  
  constructor(protected _http: HttpClient) { 
    super('historico', _http);
  }

  historicoSaveEvent: EventEmitter<boolean> = new EventEmitter();
  historicoStopEvent: EventEmitter<boolean> = new EventEmitter();

  public create(historico: Historico): Observable<Historico>{
    return create(this._http, `${AbstractService.baseUrl}historico`, historico);
  }
}
