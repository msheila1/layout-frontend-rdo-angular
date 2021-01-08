import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractComponent } from '../utils/abstract-component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-pessoa',
  templateUrl: './dialog-pessoa.component.html',
  styleUrls: ['./dialog-pessoa.component.css']
})
export class DialogPessoaComponent extends AbstractComponent implements OnInit {

  @Input() isCampoNaoObrigatorio = true;
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';

  //Dialog
  displayDialogBuscarPessoa = false;
  displayDialogTelefone = false;

  constructor(private _fb: FormBuilder, private router: Router) { 
    super();
  }

  ngOnInit() {
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
