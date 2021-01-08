import { Injectable } from "@angular/core";


@Injectable()    
export class VestuariosPessoaService{

    getVestuariosPessoa(){
        return ['0'];
    }

    getTipoVest(){
        return ['Bermuda'];
    }
    
    getDescricaoVest(){
        return ['Preta'];
    }

    
}

