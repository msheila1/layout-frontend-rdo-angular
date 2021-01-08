import { Injectable } from '@angular/core';

@Injectable()
export class DelegaciaService {
  getSeccional(): any {
    throw new Error("Method not implemented.");
  }
  getNome(): any {
    throw new Error("Method not implemented.");
  }

  getPlantao(){
      return ['0'];
  }

  getDelegacia(){
      return ['XXXXXXXXXXXXX'];
  }

  getEntrada(){
      return ['29/03/2019 08:05:20'];
  }

  getSaida(){
    return ['29/03/2019 19:01:00'];
}

  
}
