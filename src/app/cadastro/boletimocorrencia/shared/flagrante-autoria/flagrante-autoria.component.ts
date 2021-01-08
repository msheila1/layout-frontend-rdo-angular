import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { AutorIdentificadoDesconhecido } from 'src/app/models/autor-identificado-desconhecido';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DominioService } from 'src/app/services/dominio.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { TipoBoEnum } from 'src/app/models/enums/tipo-bo.enum';
import { SexoEnum } from 'src/app/models/enums/sexo.enum';
import { CompleicaoEnum } from 'src/app/models/enums/compleicao.enum';
import { IdadeAproximada } from 'src/app/models/idade-aproximada.model';
import { AlturaAproximada } from 'src/app/models/altura-aproximada.model';
import { AutoriaEnum } from 'src/app/models/enums/autoria.enum';
import { CorCutisEnum } from 'src/app/models/enums/cor-cutis.enum';

@Component({
  selector: 'app-flagrante-autoria',
  templateUrl: './flagrante-autoria.component.html',
  styleUrls: ['./flagrante-autoria.component.css']
})

export class FlagranteAutoriaComponent extends AbstractComponent implements OnInit {

  @Input()
  set tipoBo(tipoBo:TipoBoEnum) {
    this._tipoBo = tipoBo;
    this.onChangeTipoBo();
  }

  private _tipoBo:TipoBoEnum;

  autores: AutorIdentificadoDesconhecido[];
  
  dropdownSexo: { value: SexoEnum; label: string; }[];
  dropdownCompleicao: { value: CompleicaoEnum ; label: string; }[];
  dropdownCorCutis: { value: CorCutisEnum; label: string; }[];
  dropdownIdadeAproximada = [];
  dropdownAlturaAproximada = [];

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
      autores: [this.autores]
    });

    this.onChangeAuditoria();
    this.onChangeFlagrante();

    this.onChangeQuantidadeIdentificadaReconhecimentoIgnorado();
    this.loadIdadeAproximada();
    this.loadAlturaAproximada();
  }

  /** Idade Aproximada */
  loadIdadeAproximada(){
    this._dominioService.listIdadeAproximada().subscribe((result:IdadeAproximada[]) => {
      // this.dropdownIdadeAproximada = result.content;
      this.dropdownIdadeAproximada = result;
    }, error => {
      console.log(error);
    });
  }

  /** Altura Aproximada */
  loadAlturaAproximada(){
    this._dominioService.listAlturaAproximada().subscribe((result:AlturaAproximada[]) => {
      // this.dropdownAlturaAproximada = result.content;
      this.dropdownAlturaAproximada = result;
    }, error => {
      console.log(error);
    });
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
      if (TipoBoEnum.TermoCircunstanciado == this._tipoBo) {
        this.autoria.setValue(AutoriaEnum.Conhecida);
        this.autoria.disable();
        this.flagrante.enable();
      } else if (TipoBoEnum.BoletimOcorrencia == this._tipoBo
          && !JSON.parse(this.flagrante.value)) {
        this.autoria.enable();
      }
    }
  }

  onChangeFlagrante() {
    this.flagrante.valueChanges.subscribe(value => {
      if (JSON.parse(value)) {
        this.autoria.setValue(AutoriaEnum.Conhecida);
        this.autoria.disable();
      } else {
        if (TipoBoEnum.TermoCircunstanciado != this._tipoBo) {
          this.autoria.enable();
        }
      }
    });
  }

  onChangeAuditoria() {
    this.autoria.valueChanges.subscribe(value => {
      this.displayQuantidadeIdentificada = AutoriaEnum.Desconhecida == value;

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
    let autorIdentificado = this._fb.group({
      sexo: [autor.sexo],
      idade: [autor.idade, [Validators.min(0)]],
      idadeAproximada: [autor.idadeAproximada, [Validators.min(0)]],
      altura: [autor.altura, [Validators.min(0), Validators.max(3)]],
      alturaAproximada: [autor.alturaAproximada, [Validators.min(0), Validators.max(3)]],
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

}
