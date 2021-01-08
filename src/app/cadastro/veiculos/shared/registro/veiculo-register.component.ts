import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoOcorrenciaVeiculoService } from 'src/app/core/services/tipo-ocorrencia-veiculo.service';
import { TipoOcorrenciaVeiculo } from 'src/app/models/tipo-ocorrencia-veiculo.model';
import { MessageService } from 'primeng/api';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from '../../veiculo.service';
import { UfService } from 'src/app/services/uf.service';
import { Uf } from 'src/app/models/uf.model';

@Component({
  selector: 'app-registro-veiculo',
  templateUrl: './veiculo-register.component.html',
  styleUrls: ['./veiculo-register.component.css']
})
export class VeiculoRegisterComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  
  veiculoForm: FormGroup;
  tipoOcorrenciaSelecionado: TipoOcorrenciaVeiculo;
  listOcorrenciaVeiculo$: Observable<TipoOcorrenciaVeiculo[]>;
  listUf$: Observable<Uf[]>;

  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';

  displayDialogBuscarVeiculo = false;
  displayDialogBuscarMarca= false;

  constructor(
    private _formBuilder: FormBuilder, 
    private _messageService: MessageService,
    private _veiculoService: VeiculoService,
    private _tipoOcorrenciaVeiculoService: TipoOcorrenciaVeiculoService,
    private _ufService: UfService) {}

  ngOnInit() {
    this.buildForm();
    this.listOcorrenciaVeiculo$ = this._tipoOcorrenciaVeiculoService.listAll();
    this.listUf$ = this._ufService.listAll();
  }

  onSubmit() {
    //console.log(this.veiculoForm.get('tipoOcorrenciaVeiculo').value);

    // let veiculo = new Veiculo(this.veiculoForm.getRawValue());
    // veiculo.tipoOcorrenciaVeiculo = TipoOcorrenciaVeiculoEnum.Apreendido;

    // console.log(veiculo);

    console.log(this.tipoOcorrenciaSelecionado);
    console.log(this.veiculoForm.getRawValue());
  }

  onClose() {
    this.displayChange.emit(false);
  }

  newForm() {
    this.veiculoForm.reset();
  }

  loadUpdateForm(idVeiculo: number) {
    this._veiculoService.findVeiculo(idVeiculo).subscribe(v => this.loadForm(v));
  }

  loadForm(veiculo: Veiculo) {
    console.log(veiculo);

    this.veiculoForm.patchValue(veiculo);

    if (veiculo.tipoOcorrenciaVeiculo) {
      this.tipoOcorrenciaSelecionado = new TipoOcorrenciaVeiculo(veiculo.tipoOcorrenciaVeiculo);
    }

    console.log(this.veiculoForm.getRawValue());
  }

  private buildForm() {
    this.veiculoForm = this._formBuilder.group({
      'anoFabricacao': new FormControl('', []),
      'anoModelo': new FormControl('', []),
      'apolice': new FormControl('', []),
      'chassi': new FormControl('', []),
      'chassiRemarcado': new FormControl('', []),
      'cidade': new FormControl('', []),
      'combustivel': new FormControl('', []),
      'cor': new FormControl('', []),
      'documentosLevados': new FormControl('', []),
      'escolta': new FormControl('', []),
      'logotipo': new FormControl('', []),
      'marca': new FormControl('', []),
      'nomeProprietario': new FormControl('', []),
      'observacao': new FormControl('', []),
      'pessoaRelacionada': new FormControl('', []),
      'placa': new FormControl('', []),
      'placaAntiga': new FormControl('', []),
      'renavam': new FormControl('', []),
      'segurado': new FormControl('', []),
      'seguradora': new FormControl('', []),
      'tempoAbandono': new FormControl('', []),
      'tipo': new FormControl('', []),
      'tipoLocal': new FormControl('', []),
      'tipoOcorrenciaVeiculo': new FormControl('', [Validators.required]),
      'uf': new FormControl('', [])
    });
    
  }
}