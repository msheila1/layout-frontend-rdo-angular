import { Injectable } from "@angular/core";

@Injectable()    
export class ToxicoPessoaService{

    getToxico(){
        return ['0'];
    }

    getTipoToxico(){
        return ['Álcool'];
    }

}

