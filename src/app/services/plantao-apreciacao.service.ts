import { Injectable } from '@angular/core';

@Injectable()
export class PlantaoApreciacaoService {

  getRdosApreciacao(){
      return ['0'];
  }

  getDelegacia(){
      return ['03º DEL. PRESERVADA'];
  }

  getAno(){
      return ['2017'];
  }

  getNumero(){
      return ['003'];
  }

  getDelegado(){
      return ['00.222.444-66'];
  }

  getEscrivao(){
    return ['11.000.111.00'];
  }
}
