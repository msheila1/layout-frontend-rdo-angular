import { Injectable } from '@angular/core';

@Injectable()
export class PlantaoAtualService {

    getPlantaoAtual(){
        return ['0'];
    }
  
    getUsuario(){
        return ['Micaela Gabriela Rafaela Gonzaga'];
    }

    getRg(){
        return ['25.256.632-X'];
    }
  
    getEntrada(){
        return ['29/03/2019 08:05:20'];
    }
  
    getSaida(){
      return ['29/03/2019 19:01:00'];
    }

    getEmUSo(){
        return ['Sim'];
    }

}
