import { KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_AUTH = environment.auth.url;
  
  constructor(private keycloakAuth: KeycloakService) {} 

  public updateToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.keycloakAuth.updateToken(60)
        .then((refreshed) => {
          if (refreshed) {
            console.debug('Token was successfully refreshed');
          } else {
            console.debug('Token is still valid');
          }

          return resolve(refreshed);
        })
        .catch((error) => {
          return reject(error);
        });
      });
  }

  public logout(): Promise<void> {
    return this.keycloakAuth.logout(environment.webApp.baseUrl);
  }

  public loadUserProfile(): Promise<Keycloak.KeycloakProfile> {
    return this.keycloakAuth.loadUserProfile();
  }

  public getToken() {
    return this.keycloakAuth.getToken();
  }

  public getUserName(): string {
    return this.keycloakAuth.getKeycloakInstance().tokenParsed['name'];
  }

}
