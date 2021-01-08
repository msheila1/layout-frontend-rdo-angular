import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/core/services/abstract.service';
import { Veiculo } from 'src/app/models/veiculo.model';

@Injectable({providedIn: 'root'})    
export class VeiculoService extends AbstractService<Veiculo, number> {

    constructor(private _http: HttpClient) {
        super('veiculo', _http);
    }

    listVeiculosByUser(idUser: string) : Observable<Veiculo[]> {
        return this.listByEndPoint('list-veiculos-by-user', new HttpParams({
            fromObject: {
                idUser
            }
        }));
    }

    findVeiculo(idVeiculo: number) : Observable<Veiculo> {
        return this._http.get<Veiculo>(AbstractService.baseUrl+'veiculo');//TEMP
        //return this.findById(idVeiculo);
    }

    getPlacaVeiculo(){
        return ['ABC0123'];
    }

    getChassisVeiculo(){
        return ['1351561621'];
    }

    getOcorrenciaVeiculo(){
        return ['Acidentado'];
    }
}