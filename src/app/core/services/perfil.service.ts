import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { AbstractService, listBy, update, findBy, create } from "./abstract.service";
import { Perfil } from 'src/app/models/perfil.model';
import { Delegacia } from 'src/app/models/delegacia.model';
import { DelegaciaPerfil } from 'src/app/models/delegacia-perfil.model';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: "root"
})
export class PerfilService {
  
  constructor(private http: HttpClient) { }

  listPerfil(): Observable<Perfil[]>  {
    return this.listByPerfil();
  }

  listDelegacia(): Observable<DelegaciaPerfil[]>  {
    return this.listByDelegacia();
  }

  findDelegaciaById(id): Observable<Delegacia>  {

    let param = new HttpParams();
    param = param.append("id", id);

    return findBy(this.http, `${this.endpoint}get-delegacia`, param);
  }
  
  findUserById(id): any  {

    let param = new HttpParams();
    param = param.append("id", id);

    return findBy(this.http, `${this.endpoint}get-user`, param);
  }

  update(delegacia: Delegacia): Observable<Delegacia>{
    return update(this.http, `${this.endpoint}editar-delegacia`, delegacia);
  }

  updatePassword(password: Usuario): Observable<Usuario>{
    return update(this.http, `${this.endpoint}password-user`, password);
  }

  private listByPerfil(): Observable<Perfil[]> {
    return listBy(this.http, `${this.endpoint}perfil`, new HttpParams({
      fromObject: {
        
      }
    }));
  }

  private listByDelegacia(): Observable<DelegaciaPerfil[]> {
    return listBy(this.http, `${this.endpoint}delegacia-perfil`, new HttpParams({
      fromObject: {
        
      }
    }));
  }

  private get endpoint(): string {
    return `${AbstractService.baseUrl}`;
  }
}
