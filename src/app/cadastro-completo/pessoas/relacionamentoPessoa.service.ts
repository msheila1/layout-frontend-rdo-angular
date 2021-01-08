import { Injectable } from "@angular/core";

@Injectable()
export class RelacionamentoPessoaService{

    getRelacionamento(){
        return ['0'];
    }

    getAutoresVitima(){
        return ['João Paulo'];
    }

    getGrauVitima(){
        return ['Conhecido'];
    }
    
    
}

