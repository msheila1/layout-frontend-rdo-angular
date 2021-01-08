import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercorrenciaResolverGuard  /*implements Resolve<Intercorrencia> */ {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  // Intercorrencia | Observable<Intercorrencia> | Promise<Intercorrencia> {
  //   if (route.params && route.params['id']) {
  //    // return this.viewService.loadByID(route.params['id']);
  //   }

  //   return of({
  //     id: null,
  //     descricao: null
  //   });

  }
}
