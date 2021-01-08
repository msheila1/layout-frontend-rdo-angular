import { Injectable } from '@angular/core';

@Injectable()
export class PlantaoService {

  getPlantao(){
      return ['0'];
  }

  getUsuario(){
      return ['João Pereira da Silva'];
  }

  getEntrada(){
      return ['29/03/2019 08:05:20'];
  }

  getSaida(){
    return ['29/03/2019 19:01:00'];
}

  
}
