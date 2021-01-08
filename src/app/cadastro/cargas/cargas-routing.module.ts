import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CargasComponent } from './cargas.component';
import { CargaNovoComponent } from './carga-novo/carga-novo.component';

const routes: Routes = [
  {
    path: "",
    component: CargasComponent,
    children: [
      {
        path: ":id/edit",
       // component: UserEditComponent,
        resolve: {
         // user: UserResolver
        },
        pathMatch: "full"
      },
      {
        path: ":id/detail",
       // component: UserEditComponent,
        resolve: {
        //  user: UserResolver
        },
        pathMatch: "full"
      },
      {
        path: "",
       //component: UserListComponent
      },
      {
        path: "new",
        component: CargaNovoComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
