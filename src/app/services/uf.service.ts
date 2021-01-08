import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractService } from '../core/services/abstract.service';
import { Uf } from '../models/uf.model';

@Injectable({ providedIn: "root" })
export class UfService extends AbstractService<Uf, number>{

    constructor(_http: HttpClient) {
        super('uf', _http);
    }

    listAll() {
        return this.listByEndPoint('list-uf', new HttpParams());
    }
}