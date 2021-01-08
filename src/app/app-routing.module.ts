import { AuthGuard } from './plantao/guards/authGuard.service';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroBoRapidoComponent } from './cadastro-bo-rapido/cadastro-bo-rapido.component';
import { CadastroRapidoComponent } from './cadastro-rapido/cadastro-rapido.component';
import { CadastroCompletoComponent } from './cadastro/cadastro.component';
import { BuscarpessoasComponent } from './pesquisar/buscarpessoas/buscarpessoas.component';
import { BuscarRdoComponent } from './pesquisar/buscarRdo/buscarRdo.component';
import { BuscarVeiculosComponent } from './pesquisar/buscarVeiculos/buscarVeiculos.component';
import { BuscarArmasComponent } from './pesquisar/buscarArmas/buscarArmas.component';
import { PlantaoComponent } from './plantao/plantao.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarDelegaciaPanelComponent } from './perfil/shared/editar-delegacia-panel/editar-delegacia-panel.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro-bo-rapido', component: CadastroBoRapidoComponent},
    {path: 'cadastro-rapido', component: CadastroRapidoComponent},
    {path: 'cadastro', component: CadastroCompletoComponent},
    {path: 'pesquisar/buscarpessoas', component: BuscarpessoasComponent},
    {path: 'pesquisar/buscarRdo', component: BuscarRdoComponent},
    {path: 'pesquisar/buscarVeiculos', component: BuscarVeiculosComponent},
    {path: 'pesquisar/buscarArmas', component: BuscarArmasComponent},
    {path: 'plantao', component: PlantaoComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'editar-delegacia/:id', component: EditarDelegaciaPanelComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
