import { Injectable } from "@angular/core";

@Injectable() 
export class ContatoService{

    getContatos(){
        return ['0', '1'];
    }

    getAno(){
        return ['2016'];
    }

    getNumero(){
        return ['12345'];
    }

    getDelegacia(){
        return ['1a. Delegacia Preservada'];
    }

    getDelegado(){
        return ['2536541205'];
    }

    getEscrivao(){
        return ['2601230105'];
    }
    
}

