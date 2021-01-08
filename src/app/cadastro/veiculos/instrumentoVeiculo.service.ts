import { Injectable } from "@angular/core";

@Injectable()
export class InstrumentoVeiculoService{

    getInstrumentosVeiculo(){
        return ['0'];
    }

    getTipoInstrumentoVeiculo(){
        return ['Alavanca'];
    }

    getCaractInstrumentoVeiculo(){
        return [''];
    }
    
    
}

