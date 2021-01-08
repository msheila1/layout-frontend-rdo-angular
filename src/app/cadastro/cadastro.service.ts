import { Injectable } from "@angular/core";

@Injectable() 
export class CadastroService{

  getTipo(){
      return ['Boletim de Ocorrência'];
  }

  getAno(){
    return ['2019'];
  }

  getNumero(){
    return ['1'];
  }

  getDigitador(){
    return ['40995045'];
  }

  getEscrivao(){
    return ['10803985'];
  }
  
}