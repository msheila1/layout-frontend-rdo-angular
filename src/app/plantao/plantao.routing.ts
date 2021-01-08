import { Plantao } from '../models/plantao.model';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { PlantaoComponent } from './plantao.component';

const appRoutes: Routes = [
    {path: '', component: PlantaoComponent},
    {path: 'editar/:id', component: PlantaoComponent/*,
    resolve: { IntercorrenciaResolverGuard }*/
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
