import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { ValidatorFn, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { dateLessThanYearsValidator, dateLessThanTodayValidator, copyTimeValues } from 'src/app/core/utils/date-utils';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Periodo } from 'src/app/models/periodo.model';
import { TipoBoEnum } from 'src/app/models/enums/tipo-bo.enum';

@Component({
  selector: 'app-identificao-rdo',
  templateUrl: './identificao-rdo.component.html',
  styleUrls: ['./identificao-rdo.component.css']
})
export class IdentificaoRdoComponent extends AbstractComponent implements OnInit {

  @Input() listPeriodo : Periodo[];
  @Output() onTipoBoChange = new EventEmitter<TipoBoEnum>();

  private _dataOcorrenciaValidators:ValidatorFn[];
  private _dataOcorrenciaInicialValidators:ValidatorFn[];
  private _dataOcorrenciaFinalValidators:ValidatorFn[];

  constructor(private _fb: FormBuilder,
      protected messageService: MessageService) {
    super();
  }

  ngOnInit() {

    this.formGroup = this._fb.group({
      tipoBo: [null, [Validators.required]],
      delegacia: [null],
      anoBo: [new Date().getFullYear()],
      numeroBo: [null],
      dataOcorrencia: [null],
      dataOcorrenciaInicial: [null],
      dataOcorrenciaFinal: [null],
      horaOcorrencia: [null, [Validators.required]],
      periodoOcorrencia: [null],
      dataComunicacao: [new Date(), [Validators.required]],
      horaComunicacao: [new Date(), [Validators.required]]
    });

    this._dataOcorrenciaValidators = [Validators.required, dateLessThanYearsValidator(20), dateLessThanTodayValidator, this.dataOcorrenciaComunicacaoValidator];
    this._dataOcorrenciaInicialValidators = [Validators.required, dateLessThanYearsValidator(20), dateLessThanTodayValidator, this.dataOcorrenciaComunicacaoValidator];
    this._dataOcorrenciaFinalValidators = [Validators.required, dateLessThanTodayValidator, this.dataInicialFinalValidator, this.dataOcorrenciaComunicacaoValidator];

    this.dataOcorrencia.setValidators(this._dataOcorrenciaValidators);
    this.dataOcorrenciaInicial.setValidators(this._dataOcorrenciaInicialValidators);
    this.dataOcorrenciaFinal.setValidators(this._dataOcorrenciaFinalValidators);

    this.horaOcorrencia.setValidators(this.dataOcorrenciaComunicacaoValidator);
    this.dataComunicacao.setValidators([Validators.required, dateLessThanTodayValidator, this.dataOcorrenciaComunicacaoValidator]);
    this.horaComunicacao.setValidators([Validators.required, this.dataOcorrenciaComunicacaoValidator]);

    this.onChangeTipoBo();
    this.onChangeDataOcorrencia();
    this.onChangeDataOcorrenciaInicialOrFinal();
    this.onChangeHoraOcorrencia();
    this.onChangePeriodoOcorrencia();
  }

  onChangeTipoBo() {
    this.tipoBo.valueChanges.pipe(distinctUntilChanged(),
      map(value => {
        this.onTipoBoChange.emit(value);
      })
    ).subscribe();
  }

  onChangeDataOcorrencia() {
    this.dataOcorrencia.valueChanges.subscribe(value => {
      if (value) {
        this.resetControl(this.dataOcorrenciaInicial);
        this.resetControl(this.dataOcorrenciaFinal);
      } else {
        this.dataOcorrenciaInicial.setValidators(this._dataOcorrenciaInicialValidators);
        this.dataOcorrenciaFinal.setValidators(this._dataOcorrenciaFinalValidators);
      }
    });
  }

  onChangeDataOcorrenciaInicialOrFinal() {
    this.dataOcorrenciaInicial.valueChanges.subscribe(value => {
      if (value) {
        this.resetControl(this.dataOcorrencia);
      } else {
        this.dataOcorrencia.setValidators(this._dataOcorrenciaValidators);
      }
    });

    this.dataOcorrenciaFinal.valueChanges.subscribe(value => {
      if (value) {
        this.resetControl(this.dataOcorrencia);
      } else {
        this.dataOcorrencia.setValidators(this._dataOcorrenciaValidators);
      }
    });
  }

  onChangeHoraOcorrencia(){
    this.horaOcorrencia.valueChanges.subscribe(value => {
      if (value) {
        this.resetControl(this.periodoOcorrencia);
      } else {
        this.periodoOcorrencia.setValidators(Validators.required);
      }
    });
  }

  onChangePeriodoOcorrencia(){
    this.periodoOcorrencia.valueChanges.subscribe(value => {
      if (value) {
        this.resetControl(this.horaOcorrencia);
      } else {
        this.horaOcorrencia.setValidators(Validators.required);
      }
    });
  }

  dataOcorrenciaComunicacaoValidator = (): { [key: string]: boolean } | null => {
    let dataOcorrencia = this.isValueNotNullAndValidOrCurrentError('dataOcorrenciaComunicacao', this.dataOcorrencia) ? new Date(this.dataOcorrencia.value) : (this.isValueNotNullAndValidOrCurrentError('dataOcorrenciaComunicacao', this.dataOcorrenciaFinal) ? new Date(this.dataOcorrenciaFinal.value) : null);
    let horaOcorrencia = this.isValueNotNullAndValidOrCurrentError('dataOcorrenciaComunicacao', this.horaOcorrencia) ? new Date(this.horaOcorrencia.value) : null;
    let dataComunicacao = this.isValueNotNullAndValidOrCurrentError('dataOcorrenciaComunicacao', this.dataComunicacao) ? new Date(this.dataComunicacao.value) : null;
    let horaComunicacao = this.isValueNotNullAndValidOrCurrentError('dataOcorrenciaComunicacao', this.horaComunicacao) ? new Date(this.horaComunicacao.value) : null;

    if (dataOcorrencia != null) {
      dataOcorrencia = copyTimeValues(dataOcorrencia, horaOcorrencia);
    }

    if (dataComunicacao != null) {
      dataComunicacao = copyTimeValues(dataComunicacao, horaComunicacao);
    }

    let dataOcorrenciaComunicacaoControls:Array<AbstractControl> = [this.dataOcorrencia, this.dataOcorrenciaFinal, this.horaOcorrencia, this.dataComunicacao, this.horaComunicacao];

    if (dataOcorrencia != null && dataComunicacao != null
      && dataOcorrencia > dataComunicacao) {
      this.setErrors({dataOcorrenciaComunicacao: true}, dataOcorrenciaComunicacaoControls);
      return { dataOcorrenciaComunicacao  : true }
    } else {
      this.removeErrors('dataOcorrenciaComunicacao', dataOcorrenciaComunicacaoControls);
    }
  }

  dataInicialFinalValidator = () : { [key: string]: boolean } | null => {
      if (this.isValueNotNullAndValidOrCurrentError('dataInicialFinal', this.dataOcorrenciaInicial)
          && this.isValueNotNullAndValidOrCurrentError('dataInicialFinal', this.dataOcorrenciaFinal)
          && this.dataOcorrenciaInicial.value > this.dataOcorrenciaFinal.value) {
        this.dataOcorrenciaInicial.setErrors({dataInicialFinal: true});
        this.dataOcorrenciaFinal.setErrors({dataInicialFinal: true});
        return {
          dataInicialFinal: true
        };
    } else {
      this.removeErrors('dataInicialFinal', [this.dataOcorrenciaInicial, this.dataOcorrenciaFinal]);
    }
  }

  get tipoBo() {
    return this.formGroup.get("tipoBo");
  }

  get dataOcorrencia() {
    return this.formGroup.get("dataOcorrencia");
  }

  get horaOcorrencia() {
    return this.formGroup.get("horaOcorrencia");
  }

  get periodoOcorrencia() {
    return this.formGroup.get("periodoOcorrencia");
  }

  get dataOcorrenciaInicial() {
    return this.formGroup.get("dataOcorrenciaInicial");
  }

  get dataOcorrenciaFinal() {
    return this.formGroup.get("dataOcorrenciaFinal");
  }

  get dataComunicacao() {
    return this.formGroup.get("dataComunicacao");
  }

  get horaComunicacao() {
    return this.formGroup.get("horaComunicacao");
  }

  errorMsgs = {
    'dataOcorrencia': {
      dateLessThanYears: (error) => ({severity:'error', summary: 'Data Inicial', detail:'A diferença entre a data atual e a data (ou período) da ocorrência não pode ser superior a 20 anos. Corrija a data da ocorrência'}),
      dateLessThanToday: (error) => 'Não pode ser superior a Data Atual',
      dataOcorrenciaComunicacao: (error) => 'A “Data da Comunicação” não pode ser inferior a “Data da Ocorrência”'
    },
    'horaOcorrencia': {
      dataOcorrenciaComunicacao: (error) => 'A “Data da Comunicação” não pode ser inferior a “Data da Ocorrência”'
    },
    'dataOcorrenciaInicial': {
      dateLessThanToday: (error) =>  'Não pode ser superior a Data Atual',
      dataInicialFinal: (error) => 'Deve ser menor que a Data Final',
      dateLessThanYears: (error) => 'A diferença entre a data atual e a data (ou período) da ocorrência não pode ser superior a 20 anos. Corrija a data da ocorrência'
    },
    'dataOcorrenciaFinal': {
      dateLessThanToday: (error) => '“A “Data Final” não pode ser superior a Data Atual”',
      dataInicialFinal: (error) => 'Deve ser maior que a Data Inicial',
      dataOcorrenciaComunicacao: (error) => 'A “Data da Comunicação” não pode ser inferior a “Data da Ocorrência”'
    },
    'dataComunicacao': {
      dateLessThanToday: (error) => 'A “Data da Comunicação” não pode ser posterior a “Data Atual”',
      dataOcorrenciaComunicacao: (error) => 'A “Data da Comunicação” não pode ser inferior a “Data da Ocorrência”'
    },
    'horaComunicacao': {
      dataOcorrenciaComunicacao: (error) =>  'A “Data da Comunicação” não pode ser inferior a “Data da Ocorrência”'
    }
  }

}
