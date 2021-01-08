import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilService } from '../core/services/perfil.service';

import { Perfil } from '../models/perfil.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DelegaciaPerfil } from '../models/delegacia-perfil.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
 
  listPerfil: Observable<Perfil[]>;
  listDelegacia: Observable<DelegaciaPerfil[]>;

  displayDialogDelegacia = false;

  constructor(private perfilService: PerfilService, private fb: FormBuilder) {}

  ngOnInit() {
   this.listPerfil = this.perfilService.listPerfil();
   this.listDelegacia = this.perfilService.listDelegacia();
  }
}
