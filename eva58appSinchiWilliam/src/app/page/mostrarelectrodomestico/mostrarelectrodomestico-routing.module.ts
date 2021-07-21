import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarelectrodomesticoPage } from './mostrarelectrodomestico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarelectrodomesticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarelectrodomesticoPageRoutingModule {}
