import { Injectable } from "@angular/core";

@Injectable() 
export class BuscarRdoService{

    getBuscarRdo(){
        return ['0'];
    }

    getSituacao(){
        return ['Finalizado'];
    }
    
    getDelegacia(){
        return ['70º D.P. VILA EMA'];
    }

    getAno(){
        return ['2019'];
    }

    getRdo(){
        return ['15'];
    }

    getCircunscricao(){
        return ['70º D.P. VILA EMA'];
    }

    getComunicacao(){
        return ['03/01/2019'];
    }

}

