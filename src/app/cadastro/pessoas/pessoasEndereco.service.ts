import { Injectable } from "@angular/core";

@Injectable()
export class PessoasEnderecoService{

    getPessoaEndereco(){
        return ['0'];
    }

    getTipoEnd(){
        return ['Residencial'];
    }

    getLogradouroEnd(){
        return ['Rua Marechal Deodoro'];
    }

    getNumeroEnd(){
        return ['123'];
    }

    getComplementoEnd(){
        return ['bloco A'];
    }

    
}

