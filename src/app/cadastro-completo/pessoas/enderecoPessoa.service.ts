import { Injectable } from "@angular/core";

@Injectable()
export class EnderecoPessoaService{

    getEnderecoPessoa(){
        return ['0'];
    }

    getTipoEnd(){
        return ['Resindecial'];
    }
    
    getLogradouroEnd(){
        return ['Rua Brigadeiro Tobias'];
    }

    getNumeroEnd(){
        return ['123'];
    }
    
}

