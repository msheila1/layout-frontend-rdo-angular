import { Directive, ElementRef, OnInit, Input, Self, Output, ViewChild } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import * as _ from 'lodash'; 
import { AutoComplete, ButtonDirective, Card } from 'primeng/primeng';

@Directive({
  selector: '[permissionControl]',
})
export class RolePermissionDirective implements OnInit{

  @Input() permission: string;

  ngOnInit(): void {

    if(this.elementRef.nativeElement instanceof HTMLButtonElement) {
      this.elementRef.nativeElement['disabled'] = this.notPermission(this.permission);
    }

    if(this.elementRef.nativeElement['className'] === 'pnl-card'){
      this.elementRef.nativeElement['hidden'] = this.notPermission(this.permission);
    }

    if(this.elementRef.nativeElement instanceof HTMLLIElement) {
      this.elementRef.nativeElement['hidden'] = this.notPermission(this.permission);
    }

  }

  private hasPermission = (permission: any) => {    
    return permission ? _.includes(this.keycloakAuth.getKeycloakInstance().resourceAccess['dipol-rdo'].roles, permission) : true;
  };
  
  private notPermission = (permission: any) => {
    return !this.hasPermission(permission);
  };
 
  constructor(@Self() private elementRef: ElementRef, private keycloakAuth: KeycloakService) {
  }

}
