import { Injectable } from "@angular/core";

@Injectable()  
export class NaturezaService{

    getNaturezas(){
        return ['0'];
    }

    getOcorrencia(){
        return ['Não criminal'];
    }

    getEspecie(){
        return ['Captura procurado'];
    }

    getNatureza(){
        return ['Captura de procurado'];
    }

    
    
}

