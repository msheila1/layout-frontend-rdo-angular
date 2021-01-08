import { Injectable } from "@angular/core";

@Injectable()    
export class ConsultarHistoricoService{

    getConsultarRdo(){
        return ['0'];
    }

    getUsuario(){
        return ['Jesus'];
    }
    
    getData(){
        return ['21/02/2019'];
    }

    getVersao(){
        return ['1.3'];
    }

}

