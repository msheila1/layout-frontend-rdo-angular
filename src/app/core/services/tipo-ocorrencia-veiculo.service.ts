import { Injectable } from '@angular/core';
import { TipoOcorrenciaVeiculo } from 'src/app/models/tipo-ocorrencia-veiculo.model';
import { listBy, AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TipoOcorrenciaVeiculoService {

    constructor(private _http: HttpClient) {
    }

    public listAll(): Observable<TipoOcorrenciaVeiculo[]> {
        return listBy(this._http, `${this.endpoint}tipo-ocorrencia-veiculo`, new HttpParams());
    }

    private get endpoint(): string {
        return `${AbstractService.baseUrl}`;
    }
}