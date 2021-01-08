import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Autoria } from '../../../models/autoria.enum';
import { DominioService } from '../../../services/dominio.service';
import { CutisCor } from '../../../models/cutis-cor.enum';
import { Compleicao } from '../../../models/compleicao.enum';
import { Sexo } from '../../../models/sexo.enum';
import { AutorIdentificadoDesconhecido } from '../../../models/autor-identificado-desconhecido';
import { distinctUntilChanged } from 'rxjs/operators';
import { AbstractComponent } from '../utils/abstract-component';
import { TipoBo } from '../../../models/tipo-bo.enum';

@Component({
  selector: 'app-secao-flagrante-autoria',
  templateUrl: './secao-flagrante-autoria.component.html',
  styleUrls: ['./secao-flagrante-autoria.component.css']
})
export class SecaoFlagranteAutoriaComponent extends AbstractComponent implements OnInit {

  @Input()
  set tipoBo(tipoBo:TipoBo) {
    this._tipoBo = tipoBo;
    this.onChangeTipoBo();
  }

  private _tipoBo:TipoBo;

  autores: AutorIdentificadoDesconhecido[];
  
  dropdownSexo: { value: Sexo; label: string; }[];
  dropdownCompleicao: { value: Compleicao; label: string; }[];
  dropdownCorCutis: { value: CutisCor; label: string; }[];
  
  displayQuantidadeIdentificada = false;
  displayAutores = true;

  constructor(private _fb: FormBuilder, private _dominioService: DominioService) {
    super();
  }

  ngOnInit() {
    this.autores = this.autores == null ? new Array<AutorIdentificadoDesconhecido>() : this.autores;

    this.formGroup = this._fb.group({
      flagrante: [null, [Validators.required]],
      autoria: [null, [Validators.required]],
      quantidadeIdentificada: [{ updateOn: 'blur' }, [Validators.min(0)]],
      reconhecimentoIgnorado: [null],
      autoresIdentificados: this._fb.array([]),
      representar: [null],
    });

    this.onChangeAuditoria();
    this.onChangeFlagrante();

    this.onChangeQuantidadeIdentificadaReconhecimentoIgnorado();
  }

  get flagrante() {
    return this.formGroup.get('flagrante');
  }

  get autoria() {
    return this.formGroup.get('autoria');
  }

  get quantidadeIdentificada() {
    return this.formGroup.get('quantidadeIdentificada');
  }

  get reconhecimentoIgnorado() {
    return this.formGroup.get('reconhecimentoIgnorado');
  }

  get autoresIdentificados() {
    return this.formGroup.get('autoresIdentificados');
  }

  get representar() {
    return this.formGroup.get('representar');
  }

  loadDropdownSexo() {
    this.dropdownSexo = this._dominioService.listSexo();
  }

  loadDropdownCompleicao() {
    this.dropdownCompleicao = this._dominioService.listCompleicao();
  }

  loadDropdownCorCutis() {
    this.dropdownCorCutis = this._dominioService.listCorCutis();
  }

  private onChangeTipoBo() {
    if (this._tipoBo) {
      if (TipoBo.TermoCircunstanciado == this._tipoBo) {
        this.autoria.setValue(Autoria.Conhecida);
        this.autoria.disable();
        this.flagrante.enable();
      } else if (TipoBo.BoletimOcorrencia == this._tipoBo
          && !JSON.parse(this.flagrante.value)) {
        this.autoria.enable();
      }
    }
  }

  onChangeFlagrante() {
    this.flagrante.valueChanges.subscribe(value => {
      if (JSON.parse(value)) {
        this.autoria.setValue(Autoria.Conhecida);
        this.autoria.disable();
      } else {
        if (TipoBo.TermoCircunstanciado != this._tipoBo) {
          this.autoria.enable();
        }
      } 
    });  
  }

  onChangeAuditoria() {
    this.autoria.valueChanges.subscribe(value => {
      this.displayQuantidadeIdentificada = Autoria.Desconhecida == value;

      if (this.displayQuantidadeIdentificada) {
        this.loadDropdownSexo();
        this.loadDropdownCompleicao();
        this.loadDropdownCorCutis();
      } else {
        this.quantidadeIdentificada.setValue(null);
        this.reconhecimentoIgnorado.setValue(null);
      }
    });
  }

  onChangeQuantidadeIdentificadaReconhecimentoIgnorado() {
    this.quantidadeIdentificada.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      let quantidade = value;
            
      let quantidadeAtual = (<FormArray>this.autoresIdentificados.value).length;
      let diferencaAutores = quantidade == null || quantidade  == 0 ? quantidadeAtual * -1 : quantidade - quantidadeAtual;

      let remover = diferencaAutores <= 0;
      diferencaAutores = remover ? diferencaAutores * -1 : diferencaAutores;
      
      for (let i = 0; i < diferencaAutores; i++) {
        !remover ? this.pushAutorIdentificado(new AutorIdentificadoDesconhecido()) : this.popAutorIdentificado();
      }
    });

    this.reconhecimentoIgnorado.valueChanges.subscribe(value => {
      this.displayAutores = !value;
    }); 
  }

  private pushAutorIdentificado(autor: AutorIdentificadoDesconhecido) {
    console.log('pushAutorIdentificado');
    let autorIdentificado = this._fb.group({
      sexo: [autor.sexo],
      idade: [autor.idade, [Validators.min(0)]],
      altura: [autor.altura, [Validators.min(0), Validators.max(3)]],
      compleicao: [autor.compleicao],
      corCutis: [autor.idCorCutis],
    });

    let formAutoresIdentificados = <FormArray>this.autoresIdentificados;
    formAutoresIdentificados.push(autorIdentificado);
    
    this.autores.push(autor);
    this.autores = new Array<AutorIdentificadoDesconhecido>(...this.autores);
  }

  private popAutorIdentificado() {
    let formAutoresIdentificados = <FormArray>this.autoresIdentificados;
    if (formAutoresIdentificados.value.length > 0) {
      formAutoresIdentificados.removeAt(formAutoresIdentificados.length - 1);
    }
    this.autores.pop();
    this.autores = new Array<AutorIdentificadoDesconhecido>(...this.autores);
  }
}
