
import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../loader/loader.service';



@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {

    
    constructor(private authService: AuthService, private messageService: MessageService, private loaderService: LoaderService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!request.params.has('page')){
            this.showLoader();    
        }

        request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'access-control-allow-origin') });
        
        this.authService.getToken().then(token => {
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
        });

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        if (!request.headers.has('Accept')) {
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }      
        
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => { 
               return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status + '' 
                };
                
                setTimeout(() => {
                    this.messageService.add({severity:'error', summary: 'Erro no servidor', detail: 'Ocorreu um erro desconhecido no servidor.'});
                }, 1000);

                return throwError(error);
            }),
            finalize(() => {
                this.onEnd();
              })
            );
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }
    
    private hideLoader(): void {
        this.loaderService.hide();
    }
    
}
