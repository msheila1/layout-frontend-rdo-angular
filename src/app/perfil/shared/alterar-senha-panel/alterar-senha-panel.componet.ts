import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-alterar-senha-panel',
  templateUrl: './alterar-senha-panel.component.html'

})
export class AlterarSenhaPanelComponent extends AbstractComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor(private _fb: FormBuilder, protected messageService: MessageService, private perfilService: PerfilService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      id: [null],
      passwordUser: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    });

    this.passwordUser.setValidators([Validators.required, this.senhaAtual]);
    this.password.setValidators([Validators.required, this.alterarSenha]);
    this.confirmPassword.setValidators([Validators.required, this.novaSenha]);

    this.perfilService.findUserById(1).subscribe((result: Usuario) => {
      this.id.setValue(result.id);
      this.passwordUser.setValue(result.passwordUser);
      this.password.setValue(result.password);
      this.confirmPassword.setValue(result.confirmPassword);
    }, error => {
      console.log(error);
    })
  }

  senhaAtual = (): { [key: string]: boolean } | null => {
    if (this.passwordUser.value == this.password.value) {
      return { formatoSenhaAtual: true };
    } else {
      this.removeErrors('formatoSenhaAtual', this.passwordUser);
    }
  }

  alterarSenha = (): { [key: string]: boolean } | null => {
    if (this.password.value && this.password.value.length < 6) {
      return { formatoNovaSenha: true };
    } else {
      this.removeErrors('formatoNovaSenha', this.password);
    }
  }

  novaSenha = (): { [key: string]: boolean } | null => {
    if (this.password.value !== this.confirmPassword.value) {
      return { formatoConfirmaSenha: true };
    } else {
      this.removeErrors('formatoConfirmaSenha', this.confirmPassword);
    }
  }

  onSubmit(): void {
    let password = new Usuario();

    password.id = this.id.value;
    password.passwordUser = this.passwordUser.value;
    password.password = this.password.value;
    password.confirmPassword = this.confirmPassword.value;

    console.log("showSucess");
    this.validateControls();
    console.log(this.formGroup);

    this.perfilService.updatePassword(password).subscribe(() => {
      if (this.formGroup.valid) {
        this.messageService.add({
          severity: "success", summary: "Registro salvo com sucesso", detail: "Registro salvo com sucesso!"
        });
      } else {
        this.messageService.add({
          severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir"
        });
      }
    });
    if (this.formGroup.invalid) {
      return;
    }
  }

  //Limpa campos preenchidos
  clearForm() {
    this.formGroup.reset();
  }

  //GET
  get id() {
    return this.formGroup.get("id");
  }

  get passwordUser() {
    return this.formGroup.get("passwordUser");
  }

  get password() {
    return this.formGroup.get("password");
  }

  get confirmPassword() {
    return this.formGroup.get("confirmPassword");
  }
}
