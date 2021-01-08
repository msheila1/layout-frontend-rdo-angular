export class AutoCompleteGoogle {
    numero: number;
    complemento: string;
    route: string; //logradouro
    administrative_area_level_1: string; //estado
    administrative_area_level_2: string; //cidade
    postal_code: string; //cep
    sublocality_level_1: string; //bairro

    getObj() {  
        return {
            numero: this.numero,
            complemento: this.complemento,
            route: this.route,
            administrative_area_level_1: this.administrative_area_level_1,
            administrative_area_level_2: this.administrative_area_level_2,
            postal_code: this.postal_code,
            sublocality_level_1: this.sublocality_level_1
        };
    }
}