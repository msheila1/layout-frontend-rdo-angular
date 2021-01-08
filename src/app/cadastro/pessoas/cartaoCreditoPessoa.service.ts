import { Injectable } from "@angular/core";

@Injectable()
export class CartaoCreditoPessoaService{

    getCartaoCreditoPessoa(){
        return ['0'];
    }

    getNomePessoaCartao(){
        return ['João Paulo'];
    }

    getNumeroPessoa(){
        return ['01256145'];
    }

    getValidadePessoa(){
        return ['01/21'];
    }
    
    
}

