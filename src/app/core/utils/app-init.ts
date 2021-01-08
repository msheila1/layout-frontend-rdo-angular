import { KeycloakService } from 'keycloak-angular';
import { environment } from "../../../environments/environment";
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      realm: 'dipol',
      clientId: 'dipol-rdo',
      url: environment.auth.url,
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: ['/assets', '/clients/public']
  });
}