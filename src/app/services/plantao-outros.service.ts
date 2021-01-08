import { Injectable } from '@angular/core';

@Injectable()
export class PlantaoOutrosService {

    getRdosOutros(){
        return ['0'];
    }
  
    getDelegacia(){
        return ['02º DEL. PRESERVADA'];
    }
  
    getAno(){
        return ['2018'];
    }
  
    getNumero(){
        return ['001'];
    }
  
    getDelegado(){
        return ['11.222.333-04'];
    }
  
    getEscrivao(){
      return ['00.111.000-01'];
    }
  
}
