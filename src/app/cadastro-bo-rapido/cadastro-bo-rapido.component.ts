import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-cadastro-bo-rapido',
  templateUrl: './cadastro-bo-rapido.component.html',
  styleUrls: ['./cadastro-bo-rapido.component.css'],
})
export class CadastroBoRapidoComponent implements OnInit {

  display: boolean = false;
  delegado: string[] = [];
  escrivao: string[] = [];
  ano: string[] = [];
  numero: string[] = [];
  delegacia: string[] = [];
  contatos: string[] = [];
  contatosService: ContatoService; 
  data: any;
  data2: any;

  images: any[];


  constructor() { 
    this.contatosService = new ContatoService();

    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit() {
    this.contatos = this.contatosService.getContatos();
    this.ano = this.contatosService.getAno();
    this.numero = this.contatosService.getNumero();
    this.delegacia = this.contatosService.getDelegacia();
    this.delegado = this.contatosService.getDelegado();
    this.escrivao = this.contatosService.getEscrivao();

    this.images = [];
    this.images.push({source:'../../dist/assets/images/img-login.jpeg'});
    
  }

  showDialog() {
    this.display = true;
}
}



