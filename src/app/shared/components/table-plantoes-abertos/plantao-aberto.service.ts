import { Injectable } from '@angular/core';

@Injectable()
export class PlantaoAbertoService {

    getPlantaoAberto(){
        return ['0'];
    }
  
    getDelegado(){
        return ['Carlos Eduardo Pereira da Silva'];
    }

    getHora(){
        return ['01/02/2019 09:10:00'];
    }

}
