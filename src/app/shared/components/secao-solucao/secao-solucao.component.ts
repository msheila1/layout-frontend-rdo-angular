import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AbstractComponent } from "../utils/abstract-component";
import { DominioService } from "../../../services/dominio.service";
import { TipoSolucao } from "../../../models/tipo-solucao.enum";
import { TipoExamesRequisitados } from '../../../models/tipo-exames-requisitados.enum';
import { TipoProvidencias } from '../../../models/tipo-providencias.enum';
import { ProvidenciaDTO } from 'src/app/models/providenciaDTO.model';

@Component({
  selector: "app-secao-solucao",
  templateUrl: "./secao-solucao.component.html",
  styleUrls: ["./secao-solucao.component.css"]
})
export class SecaoSolucaoComponent extends AbstractComponent implements OnInit {
  @Input() isCadastroCompleto = true;

  dropdownTipoSolucao: { value: TipoSolucao; label: string }[];
  dropdownTipoExamesRequisitados: { value: TipoExamesRequisitados; label: string }[];
  dropdownTipoProvidencias = [];

  constructor(private _fb: FormBuilder,
    private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      tipoSolucao: [null, [Validators.required]],
      tipoExameRequisitado: [null],
      TipoProvidencias: [null]
    });

    this.loadDropdownTipoSolucao();
    this.loadDropdownTipoExamesRequisitados();
    this.loadDropdownTipoProvidencias();
  }

  get tipoSolucao() {
    return this.formGroup.get("tipoSolucao");
  }

  get tipoExameRequisitado() {
    return this.formGroup.get("tipoExameRequisitado");
  }

  get TipoProvidencias() {
    return this.formGroup.get("TipoProvidencias");
  }

  loadDropdownTipoSolucao() {
    this.dropdownTipoSolucao = this._serviceDominio.listTipoSolucao();
  }

  loadDropdownTipoExamesRequisitados() {
    this.dropdownTipoExamesRequisitados = this._serviceDominio.listTipoExamesRequisitados();
  }

  loadDropdownTipoProvidencias() {
    this._serviceDominio.listTipoProvidencias().subscribe((result:ProvidenciaDTO[]) => {
      this.dropdownTipoProvidencias = result;
    }, error => {
      console.log(error);
    });
  }
}
