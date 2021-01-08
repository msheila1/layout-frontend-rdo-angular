import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
 
  constructor(private toastrService: ToastrService) { }

 showSuccess(titulo, message) {
  this.toastrService.success( message, titulo);
 }

  showWarning(titulo, message) {
 this.toastrService.warning( message, titulo);
 }
 
  showError(titulo, message) {
   this.toastrService.error(message, titulo);
 }
}