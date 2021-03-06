import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { OsListaComponent } from './os-lista/os-lista.component';
import { OsFormularioComponent } from './os-formulario/os-formulario.component';


const osRoutes: Routes = [
    { path: '', component: OsListaComponent},
    { path: ':id', component: OsListaComponent},
    { path: 'visualizar/:id', component: OsFormularioComponent},
    { path: 'incluir/:id', component: OsFormularioComponent},
    { path: 'alterar/:id', component: OsFormularioComponent},
    { path: 'devolver/:id', component: OsFormularioComponent}
  ];


@NgModule({
    imports: [RouterModule.forChild(osRoutes)],
    exports: [RouterModule]
  })

  export class OsRouting {}
