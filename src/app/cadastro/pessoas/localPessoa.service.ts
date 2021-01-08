import { Injectable } from "@angular/core";

@Injectable()
export class LocalPessoaService{

    getLocalPessoa(){
        return ['0'];
    }

    getNomeLocal(){
        return ['Padaria Havanna'];
    }

    getPeriodoLocal(){
        return ['Manhã'];
    }

    getTipoLocal(){
        return ['Bar'];
    }

    
    
}

