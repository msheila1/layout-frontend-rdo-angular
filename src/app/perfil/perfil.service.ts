import { Injectable } from "@angular/core";

@Injectable()
export class PerfilService {
  
  getPerfilAtual() {
    return ["0"];
  }

  getNome() {
    return ["TESTE 1313 PRODESP"];
  }

  getRg() {
    return ["24121987"];
  }

  getCargo() {
    return ["Delegado"];
  }

  getPerfil() {
    return ["Delegado"];
  }

  getTipoVisualizacao() {
    return ["Normal"];
  }

  getAcesso() {
    return ["Sim"];
  }

  getAcessoInquerito() {
    return ["Sim"];
  }
  getSeccional() {
    return ["DEL.SEC.8º SAO MATEUS"];
  }

  getCodDp() {
    return ["10361"];
  }

  getNomeDp() {
    return ["0º D.P. VILA EMA"];
  }

  getTipoDp() {
    return ["Normal"];
  }

  getDelegadoTit() {
    return ["Dr. JESUS"];
  }

  getDelegadoPlantao() {
    return ["Dr. JESUS"];
  }

  getInquerito() {
    return ["Sim"];
  }

  getBloqueiaRg() {
    return ["Sim"];
  }

  getBloqueiaVeiculo() {
    return ["Sim"];
  }

  getBloqueiaDesap() {
    return ["Sim"];
  }

  getEnviaDefensoria() {
    return ["Sim"];
  }

  getEnviaInfocrim() {
    return ["Sim"];
  }
  
  getEdicao() {
    return ["Sim"];
  }
}
