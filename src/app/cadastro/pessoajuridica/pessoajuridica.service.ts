import { Injectable } from "@angular/core";

@Injectable()   
export class PessoaJuridicaService{

    getPessoaJuridica(){
        return ['0', '1','2'];
    }

    getTipo(){
        return ['Indicado'];
    }

    getNome(){
        return ['Empresa XXX'];
    }

    getDdd(){
        return ['011'];
    }

    getTelefone(){
        return ['954263524'];
    }

    getOperadora(){
        return ['Tim'];
    }

    
    
}

