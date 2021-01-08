import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', sticky: true });
  }

  get diagnostic() { return JSON.stringify(this.loginForm.value); }

}