import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, observable } from 'rxjs';
import { AbstractService, listBy } from "./abstract.service";
import { DescrPlantao, PlantaoAnterior, UsuarioPlantaoAnterior, PlantaoAtual, MovimentacaoUsuarioPlantao, UsersPlantonistas, Delegacia, Plantao, Intercorrencia } from '../../models/plantao.model';
import * as _ from 'lodash'; 


@Injectable({
  providedIn: "root"
})
export class ViewService {


  teste; users; users2; usersAtual; usersAtual2; userPlantonista; model: any;

  constructor(private http: HttpClient) { }

  listInfoPlantaoAtual(): Observable<DescrPlantao[]> {
    return this.listByPlantao();
  }

  
  private listByPlantao(): Observable<DescrPlantao[]> {
    return listBy(this.http, `${AbstractService.baseUrl}plantao-atual`, new HttpParams({
      fromObject: {
        
      }
    }));
  }

  private get endpoint(): string {
    return `${AbstractService.baseUrl}`;
  }

  listUsuarioPlantao(): Observable<PlantaoAnterior[]> {
    return this.listByUsuarioPlantao();
  }

  public listByUsuarioPlantao(): Observable<PlantaoAnterior[]> {
    return listBy(this.http, `${AbstractService.baseUrl}plantao-anterior`, new HttpParams({
      fromObject: {
        
      }
    }));

  }


listUsuarioPlantaoAnterior(): Observable<UsuarioPlantaoAnterior[]> {
  return this.listByUsuarioPlantaoAnterior();
}

public listByUsuarioPlantaoAnterior(): Observable<UsuarioPlantaoAnterior[]> {
  return listBy(this.http, `${this.endpoint}plantao-anterior`, new HttpParams({
    fromObject: {

    }
  })).pipe(
    map((plantao: UsuarioPlantaoAnterior[]) => {
      const users = _.forEach(plantao, function(num) { console.log(num); });
      const users2 = users[0].userPlantaoAnterior;      
      return users2;
    })
  );
}

listMovimentacaoAtual(): Observable<PlantaoAtual[]> {
  return this.listByPlantaoAtual();
}

private listByPlantaoAtual(): Observable<PlantaoAtual[]> {
  return listBy(this.http, `${AbstractService.baseUrl}movimentacao-plantao`, new HttpParams({
    fromObject: {
      
    }
  }));
}

listMovimentacaoPlantaoAtual(): Observable<MovimentacaoUsuarioPlantao[]> {
  return this.listByUsuarioPlantaoAtual();
}

public listByUsuarioPlantaoAtual(): Observable<MovimentacaoUsuarioPlantao[]> {
  return listBy(this.http, `${this.endpoint}movimentacao-plantao`, new HttpParams({
    fromObject: {

    }
  })).pipe(
    map((plantao: MovimentacaoUsuarioPlantao[]) => {
      const usersAtual = _.forEach(plantao, function(num) { console.log(num); });
      const usersAtual2 = usersAtual[0].userPlantaoAtual;      
      return usersAtual2;
    })
  );
}

listPlantonistas(): Observable<UsersPlantonistas[]>{
  return this.listByPlantonistas();
}

private listByPlantonistas(): Observable<UsersPlantonistas[]> {
  return listBy(this.http, `${AbstractService.baseUrl}plantonistas`, new HttpParams({
    fromObject: {
      
    }
  })).pipe(
    map((plantonista: MovimentacaoUsuarioPlantao[]) => {
      const userPlantao = _.forEach(plantonista, function(num) { console.log(num); });
      const usuariosPlantonistas = userPlantao[0].plantonista;            
      console.log(userPlantao);
      return userPlantao;
    })
  );
}


listPlantao(): Observable<Plantao[]> {
  return this.listByPlantaoDialog();
}

private listByPlantaoDialog(): Observable<Plantao[]> {
  return listBy(this.http, `${AbstractService.baseUrl}dialog-plantao`, new HttpParams({
    fromObject: {
      
    }
  }));
}

listDelegacia(): Observable<Delegacia[]> {
  return this.listByDelegaciaDialog();
}

private listByDelegaciaDialog(): Observable<Delegacia[]> {
  return listBy(this.http, `${AbstractService.baseUrl}dialog-delegacia`, new HttpParams({
    fromObject: {
      
    }
  }));
}


/*InsertIntercorrencia(): Observable<Intercorrencia[]> {
  return this.createIntercorrencia();
}

private createIntercorrencia(): Observable<Intercorrencia>[]{
  return insert(Intercorrencia[]): Observable<Intercorrencia>[] {
    return create(this.http, `${AbstractService.baseUrl}intercorrencia-plantao`, new model({
      fromObject: {
        
      }
    }));
  }
}

*/

  
}
