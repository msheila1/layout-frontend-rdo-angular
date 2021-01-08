import { Injectable } from "@angular/core";

@Injectable()    
export class PlantonistaService{

    getPlantonista(){
        return ['0', '1','2'];
    }

    getUsuario(){
        return ['João Paulo'];
    }

    getRg(){
        return ['12345'];
    }

    getEntrada(){
        return ['10/10/2018 08:00'];
    }

    getSaida(){
        return ['10/10/2018 10:00'];
    }

    getUso(){
        return ['Não'];
    }
    
}

