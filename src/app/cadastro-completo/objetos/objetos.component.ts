import { ObjetosService } from "./objetos.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-objetos",
  templateUrl: "./objetos.component.html",
  styleUrls: ["./objetos.component.css"]
})
export class ObjetosComponent implements OnInit {
  //Objetos
  displayDialogObjeto = false;
  displayDialogObjetoImportacao = false;
  ObjetosService: ObjetosService;
  selecionaObjeto; objeto; numeroObjeto; subtipoObjeto; modoObjeto: any;
  select: any;
  selected: string;
  items: any;
  arquivos: any;

  constructor() {
    this.select = [];
    this.select.push({ label: "Selecione", value: "1" });

    //Objetos
    this.ObjetosService = new ObjetosService();
  }

  ngOnInit() {
    //Objetos
    this.objeto = this.ObjetosService.getObjeto();
    this.numeroObjeto = this.ObjetosService.getNumeroObjeto();
    this.subtipoObjeto = this.ObjetosService.getSubtipoObjeto();
    this.modoObjeto = this.ObjetosService.getModoObjeto();

    //Botões Ações
    this.items = [
      {label: "Editar", icon: "fa fa-edit", command: () => {this.editar();}},
      { label: "Excluir", icon: "fa fa-close", routerLink: ["/setup"] }
    ];
    this.arquivos = [
      {label: "Editar", icon: "fa fa-edit", command: () => {this.editarArquivo();}},
      { label: "Excluir", icon: "fa fa-close", routerLink: ["/setup"] }
    ];
  }
  editar() {
    this.displayDialogObjeto = true;
  }
  editarArquivo() {
    this.displayDialogObjetoImportacao = true;
  }
}
