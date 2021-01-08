import { Injectable } from "@angular/core";

@Injectable()    
export class VeiculoService{

    getVeiculos(){
        return ['0'];
    }

    getPlacaVeiculo(){
        return ['ABC0123'];
    }

    getChassisVeiculo(){
        return ['1351561621'];
    }

    getOcorrenciaVeiculo(){
        return ['Acidentado'];
    }
    
}

