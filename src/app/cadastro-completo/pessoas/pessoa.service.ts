import { Injectable } from "@angular/core";

@Injectable()    
export class PessoaService{

    getNomePessoa(){
        return ['0','1'];
    }

    getPessoas(){
        return ['João Paulo Ferreira da Silva'];
    }

    getRg(){
        return ['01254789-5'];
    }

    getTipoPessoa(){
        return ['Vítima'];
    }  
}

