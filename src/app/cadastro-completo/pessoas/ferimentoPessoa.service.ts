import { Injectable } from "@angular/core";

@Injectable()
export class FerimentoPessoaService{

    getFerimentoPessoa(){
        return ['0'];
    }

    getFerimento(){
        return ['Ferida Contusa'];
    }

    getInstrumento(){
        return ['Arma de Fogo'];
    }
    
    
}

