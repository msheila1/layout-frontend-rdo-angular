import { ArmasService } from "./armas.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-armaseacessorios",
  templateUrl: "./armaseacessorios.component.html",
  styleUrls: ["./armaseacessorios.component.css"]
})
export class ArmaseacessoriosComponent implements OnInit {
  //Armas
  displayDialogArmas = false;
  ArmasService: ArmasService;
  selecionaArma; armas; numeroArma; marcaArma; calibreArma; tipoArma: any;
  select: any[];
  selected: string;
  items: any;

  constructor() {
    this.select = [];
    this.select.push({ label: "Selecione", value: "1" });
    //Armas
    this.ArmasService = new ArmasService();
  }

  ngOnInit() {
    //Armas
    this.armas = this.ArmasService.getArmas();
    this.numeroArma = this.ArmasService.getNumeroArma();
    this.marcaArma = this.ArmasService.getMarcaArma();
    this.calibreArma = this.ArmasService.getCalibreArma();
    this.tipoArma = this.ArmasService.getTipoArma();

    //Botão Excluir
    this.items = [
      { label: "Excluir", icon: "fa fa-close", routerLink: ["/"] }
    ];
  }
}
