import { Injectable } from "@angular/core";

@Injectable()    
export class BuscarVeiculosService {

    getBuscarVeiculos() {
        return ['0'];
    }

    getOrigem() {
        return ['RDO'];
    }

    getDelegacia() {
        return ['PRODESP'];
    }

    getAno() {
        return ['2015'];
    }

    getNumero() {
        return ['1167'];
    }

    getFabricacao() {
        return ['2015'];
    }

    getModelo() {
        return ['2015'];
    }

    getCidade() {
        return ['Ariranha'];
    }

    getUF() {
        return ['SP'];
    }

    getSituacao() {
        return [''];
    }

}
