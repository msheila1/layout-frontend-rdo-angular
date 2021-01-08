import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { listBy } from '../core/services/abstract.service';
import { create } from '../core/services/abstract.service';
import { Logradouro } from '../models/logradouro.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl = environment.services.baseUrl;
  endpoint = `${this.baseUrl}enderecos/`;

  private URL_LOGRADOURO = "logradouros";
  private FIND_BY_LATITUDE_AND_LONGITUDE = "logradouros/findByLatitudeAndLongitude";
  private DELEGACIA_FIND_BY_LATITUDE_AND_LONGITUDE = "delegacias/findByLatitudeAndLongitude";

  constructor(private _http: HttpClient) {
  }

  findLogradouro(uf, municipio, search) {    
    let params = new HttpParams();
    params = params.append("uf", uf);
    params = params.append("municipio", municipio);
    params = params.append("search", search);

    return listBy(this._http, this.endpoint + this.URL_LOGRADOURO, params);
  }

  findByLatitudeAndLongitude(latitude, longitude) {    
    let params = new HttpParams();
    params = params.append("latitude", latitude);
    params = params.append("longitude", longitude);

    return listBy(this._http, this.endpoint + this.FIND_BY_LATITUDE_AND_LONGITUDE, params);
  }

  saveLogradouro(logradouro: Logradouro) {
    return create(this._http, this.endpoint + this.URL_LOGRADOURO, logradouro);
  }

  findDelegaciaByLatitudeAndLongitude(latitude, longitude) : any {
    let params = new HttpParams();
    params = params.append("latitude", latitude);
    params = params.append("longitude", longitude);

    return listBy(this._http, this.endpoint + this.DELEGACIA_FIND_BY_LATITUDE_AND_LONGITUDE, params);
  }

  
}
