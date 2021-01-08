import { BuscarpessoasComponent } from './pesquisar/buscarpessoas/buscarpessoas.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  

  isLoggedIn = true;
  displayBuscarPessoas: boolean = false;
  
  showDialogBuscarPessoas() {    
    this.displayBuscarPessoas = true;
  }
    
}
