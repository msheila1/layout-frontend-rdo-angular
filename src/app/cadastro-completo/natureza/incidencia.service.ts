import { Injectable } from "@angular/core";

@Injectable()    
export class IncidenciaService{

    getIncidencia(){
        return ['0'];
    }

    getPessoa(){
        return ['João Paulo'];
    }

    getTipoVinc(){
        return ['Autor/Vítima'];
    }

    getNatureza(){
        return ['Captura de procurado'];
    }

    getEspecie(){
        return [''];
    }

    getConduta(){
        return [''];
    }

    getDesdobramento(){
        return [''];
    }

    getModalidade(){
        return [''];
    }

    getCircunstancia(){
        return [''];
    }

    getCrime(){
        return ['Consumado'];
    }
    
    
}

