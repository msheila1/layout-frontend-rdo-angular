import { Injectable } from "@angular/core";

@Injectable()
export class CargaService{

    getCarga(){
        return ['0'];
    }

    getTipoCarga(){
        return ['Cigarros'];
    }

    getSubtipoCarga(){
        return ['Carga Mista'];
    }

    getModoCarga(){
        return ['Danificado'];
    }

    
}

