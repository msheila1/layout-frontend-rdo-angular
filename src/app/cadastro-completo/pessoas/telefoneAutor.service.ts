import { Injectable } from "@angular/core";

@Injectable()
export class TelefoneAutorService{

    getTelefoneAutor(){
        return ['0'];
    }

    getTipoAutor(){
        return ['Celular'];
    }
    
    getDddAutor(){
        return ['011'];
    }

    getNumeroAutor(){
        return ['96565-0123'];
    }

    
}

