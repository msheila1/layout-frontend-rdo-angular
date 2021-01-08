import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-perfil-panel',
  templateUrl: './perfil-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfilPanelComponent {
  
  @Input() value: any;
  images: any[];

  constructor() {
   this.images = [];
   this.images.push({source:'../../assets/img/avatar-user2.png', thumbnail: '../../assets/img/avatar-user2.png', title:'Usuário'});
   }
 
  ngOnInit() {
  }

}
