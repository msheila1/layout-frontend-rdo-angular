import { Injectable } from "@angular/core";

@Injectable()    
export class CaracteristicasPessoaService{

    getCaracteristicasPessoa(){
        return ['0'];
    }

    getTipoCaract(){
        return ['Cicatriz'];
    }

    getLocalCaract(){
        return ['No antebraço direito'];
    }
    
    
}

