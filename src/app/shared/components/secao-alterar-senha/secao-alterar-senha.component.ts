import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AbstractComponent } from "../utils/abstract-component";
import { MessageService } from "primeng/api";
import { MustMatch } from "../utils/must-match.validator";
import { MustMatchSenhaAtual } from "../utils/must-match.validator";

@Component({
  selector: "app-secao-alterar-senha",
  templateUrl: "./secao-alterar-senha.component.html",
  styleUrls: ["./secao-alterar-senha.component.css"],
  providers: [MessageService]
})
export class SecaoAlterarSenhaComponent extends AbstractComponent implements OnInit {
  submitted = false;

  constructor( private _fb: FormBuilder, protected messageService: MessageService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group(
      { 
        senhaAtual: [null, [Validators.required]],
        password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('')])],
        confirmPassword: [null, [Validators.required]]
      },
      {
        validator: MustMatchSenhaAtual('senhaAtual', 'password')
      }
    );
  }

  get senhaAtual(){
    return this.formGroup.get("senhaAtual");
  }

  get password(){
    return this.formGroup.get("password");
  }

  get confirmPassword() {
    return this.formGroup.get("confirmPassword");
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    console.log("showSucess");

    this.validateControls();

    console.log(this.formGroup);

    if (this.formGroup.valid) {
      this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "Senha alterada com sucesso!"
      });
    } else {
      this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir"
      });
    }

    if (this.formGroup.invalid) {
      return;
    }

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.formGroup.value));
  }

  clearForm() {
    this.formGroup.reset();
  }
}
