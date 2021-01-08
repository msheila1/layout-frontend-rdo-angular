import { Injectable } from "@angular/core";

@Injectable()    
export class TelefonePessoaService{

    getTelefonePessoa(){
        return ['0'];
    }

    getOperadoraTel(){
        return ['Celular'];
    }
    
    getDddTel(){
        return ['011'];
    }

    getNumeroTel(){
        return ['96565-0123'];
    }

    getRamalTel(){
        return ['123'];
    }
    
}

