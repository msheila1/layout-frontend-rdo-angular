import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelegaciaService {

  getDelegacia(){
    return ['0'];
  }

  getSeccional(){
    return ['DEL.SEC.8º SAO MATEUS'];
  }
  getCodigoDp(){
    return ['10361'];
  }

  getNomeDp(){
    return ['70º D.P. VILA EMA'];
  }

  getTipoDp(){
    return ['Preservada'];
  }

  getDelegadoTit(){
    return ['Dr. Jesus'];
  }

  getDelegadoPlantao(){
    return ['Dr. Jesus'];
  }

  getInqueritos(){
    return ['Sim'];
  }

  getBloqueioRg(){
    return ['Sim'];
  }

  getBloqueioVeiculo(){
    return ['Sim'];
  }

  getBloqueioDesap(){
    return ['Sim'];
  }

  getEnviaDefensoria(){
    return ['Sim'];
  }

  getEnviaInfocrim(){
    return ['Sim'];
  }

  getEdicaoDoc(){
    return ['Sim'];
  }

  constructor() {
  }

}
