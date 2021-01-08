import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from '../../environments/environment';

import { listBy } from '../core/services/abstract.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TipoLocal } from '../models/tipo-local.model';
import { Observable } from 'rxjs';
import { SubTipoLocal } from '../models/subtipo-local.model';
import { Uf } from '../models/uf.model';
import { TipoIntoleranciaEnum } from '../models/enums/tipo-intolerancia.enum';
import { TipoSolucaoEnum } from '../models/enums/tipo-solucao.enum';
import { TipoExamesRequisitadosEnum } from '../models/enums/tipo-exames-requisitados.enum';
import { SexoEnum } from '../models/enums/sexo.enum';
import { CompleicaoEnum  } from '../models/enums/compleicao.enum';
import { CorCutisEnum } from '../models/enums/cor-cutis.enum';

import { ModoCarga } from '../models/modo-carga.model';
import { TipoCarga } from '../models/tipo-carga.model';
import { UnidadeCarga } from '../models/unidade-carga.model';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  private UF_ALL = "ufs/all";
  private MUNICIPIO_FIND_BY_UF = "municipios";
  private PERIODO_ALL = "periodos/all";
  private APRESENTACAO_OCORRENCIA_ALL = "apresentacoes-ocorrencias/all";
  private PROVIDENCIA_ALL = "providencias/all";
  private ALTURA_APROXIMADA_ALL = "alturas-aproximadas/all";
  private IDADE_APROXIMADA_ALL = "idades-aproximadas/all";
  private TIPO_CARGA_ALL = "tipo-carga";
  private MODO_CARGA_ALL = "modo-carga";
  private UNIDADE_CARGA_ALL = "unidade-carga";


  baseUrl = environment.services.baseUrl;
  endpoint = `${this.baseUrl}dominio/`;

  constructor(private _http: HttpClient) {
  }

  listTipoLocal() : Observable<TipoLocal[]>{
    return listBy(this._http, this.endpoint + `tipos-locais/all`);
  }

  listSubTipoLocal(idTipoLocal: number) : Observable<SubTipoLocal[]>{
    return listBy(this._http, this.endpoint + `tipos-locais/${idTipoLocal}/subtipos-locais`);
  }

  listUf(){  //FEITO, falta mergeRequest
    let listUF = [];

    //TODO:DNS REMOVER_INICIO, apenas para testes enquanto o MicroServiço não esta retornando resultados
    let sp = new Uf();
    sp.uf = "SP";
    sp.nome = "São Paulo";
    listUF.push(sp);

    let mg = new Uf();
    mg.uf = "MG";
    mg.nome = "Minas Gerais";
    listUF.push(mg);

    let rj = new Uf();
    rj.uf = "RJ";
    rj.nome = "Rio de Janeiro";
    listUF.push(rj);
    //TODO:DNS REMOVER_FIM, apenas para testes enquanto o MicroServiço não esta retornando resultados

    return listUF;

    // return listBy(this._http, this.endpoint + this.UF_ALL);
  }

  listMunicipioByUf(uf:string) : any {

    let params = new HttpParams();
    params = params.append("uf", uf);
    params = params.append("counted", "false");
    params = params.append("size", "9999999");
    
    return listBy(this._http, this.endpoint + this.MUNICIPIO_FIND_BY_UF, params);
  }

  listPeriodo() : any {
    return listBy(this._http, this.endpoint + this.PERIODO_ALL);
  }

  listTipoIntolerancia() {  //TODO, não identifiquei a tabela
    return [
      {value: TipoIntoleranciaEnum.Homofobia, label: 'Homofobia/Transfobia' },
      {value: TipoIntoleranciaEnum.Racial, label: 'Racial/Etnia/Cor' },
      {value: TipoIntoleranciaEnum.Origem, label: 'Origem' },
      {value: TipoIntoleranciaEnum.Religioso, label: 'Religioso' },
      {value: TipoIntoleranciaEnum.Outros, label: 'Outros' }
    ];
  }

  listApresentacaoOcorrencia(){
    return listBy(this._http, this.endpoint + this.APRESENTACAO_OCORRENCIA_ALL);
  }
  
  listTipoSolucao(){ //FEITO, falta mergeRequest
    return [
      {value: TipoSolucaoEnum.RepresentacaoRequerimento, label: 'Ag. Representação/Requerimento' },
      {value: TipoSolucaoEnum.AguardandoLaudos, label: 'Aguardando Laudos' },
      {value: TipoSolucaoEnum.ApreciacaoDelegado, label: 'BO para Flagrante' },
      {value: TipoSolucaoEnum.BoFlagrante, label: 'BO para Inquérito' },
      {value: TipoSolucaoEnum.BoInquerito, label: 'BO para Investigação' },
      {value: TipoSolucaoEnum.BoRegistro, label: 'BO para Registro' },
      {value: TipoSolucaoEnum.EncamFebem, label: 'Encaminhamento Febem/V.Infan.Juventude' },
      {value: TipoSolucaoEnum.EncamAreaFato, label: 'Encaminhamento DP Área do Fato' },
      {value: TipoSolucaoEnum.EncamJecrim, label: 'Encaminhamento Jecrim' },
      {value: TipoSolucaoEnum.Oficio, label: 'Ofício' }
    ];
  }

  listTipoExamesRequisitados(){ //FEITO, falta mergeRequest
    return [
      {value: TipoExamesRequisitadosEnum.IC, label: 'IC' },
      {value: TipoExamesRequisitadosEnum.ICML, label: 'IC-ML' },
      {value: TipoExamesRequisitadosEnum.IML, label: 'IML' },
      {value: TipoExamesRequisitadosEnum.SVO, label: 'SVO' }
    ];
  }

  listTipoProvidencias() : any {
    return listBy(this._http, this.endpoint + this.PROVIDENCIA_ALL);
  }

  listSexo() { //TODO, não identifiquei a tabela
    return [
      {value: SexoEnum.Masculino, label: 'Masculino' },
      {value: SexoEnum.Feminino, label: 'Feminino' }
    ];
  }

  listCorCutis() { // FEITO, falta mergeRequest
    return [
      {value: CorCutisEnum.Amarela, label: 'Amarela' },
      {value: CorCutisEnum.Branca, label: 'Branca' },
      {value: CorCutisEnum.Parda, label: 'Parda' },
      {value: CorCutisEnum.Preta, label: 'Preta' },
      {value: CorCutisEnum.Vermelha, label: 'Vermelha' },
      {value: CorCutisEnum.Outra, label: 'Outra' },
    ];
  }

  listCompleicao() { // TODO, não identifiquei a tabela
    return [
      {value: CompleicaoEnum.Gordo, label: 'Gordo' },
      {value: CompleicaoEnum.Magro, label: 'Magro' },
      {value: CompleicaoEnum.Forte, label: 'Forte' },
      {value: CompleicaoEnum.Atletico, label: 'Atlético' }
    ];
  }

  listAlturaAproximada() : any {
    return listBy(this._http, this.endpoint + this.ALTURA_APROXIMADA_ALL);
  }

  listIdadeAproximada() : any {
    return listBy(this._http, this.endpoint + this.IDADE_APROXIMADA_ALL);
  }

  //TODO alterar para endpoint REST (this.endpoint) (atualmente db.json)
  listTipoCarga(): Observable<TipoCarga[]> {
    return listBy(this._http, this.baseUrl + this.TIPO_CARGA_ALL);
  }

  //TODO alterar para endpoint REST (this.endpoint) (atualmente db.json)
  listModoCarga(): Observable<ModoCarga[]> {
    return listBy(this._http, this.baseUrl + this.MODO_CARGA_ALL);
  }

  //TODO alterar para endpoint REST (this.endpoint) (atualmente db.json)
  listUnidadeCarga(): Observable<UnidadeCarga[]> {
    return listBy(this._http, this.baseUrl + this.UNIDADE_CARGA_ALL);
  }
}
