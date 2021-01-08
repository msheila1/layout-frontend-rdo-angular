import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  getPerfilAtual(){
    return ['0'];
  }

  getNome(){
    return ['JESUS'];
  }

  getRg(){
    return ['24121987'];
  }

  getCargo(){
    return ['Delegado'];
  }

  getPerfil(){
    return ['Delegado'];
  }

  getTipoVisualizacao(){
    return ['Sim'];
  }

  getAcessoProv(){
    return ['Sim'];
  }

  getEditaDoc(){
    return ['Sim'];
  }

  getAcessoInquerito(){
    return ['Sim'];
  }

  constructor() {
  }
}
