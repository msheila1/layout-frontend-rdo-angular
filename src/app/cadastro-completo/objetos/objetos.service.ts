import { Injectable } from "@angular/core";


@Injectable()    
export class ObjetosService{

    getObjeto(){
        return ['0'];
    }

    getNumeroObjeto(){
        return ['1'];
    }

    getSubtipoObjeto(){
        return ['Relógio de pulso'];
    }

    getModoObjeto(){
        return ['Apreendido'];
    }

    
}

