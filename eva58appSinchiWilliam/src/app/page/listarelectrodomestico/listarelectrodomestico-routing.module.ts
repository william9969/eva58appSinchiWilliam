import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarelectrodomesticoPage } from './listarelectrodomestico.page';

const routes: Routes = [
  {
    path: '',
    component: ListarelectrodomesticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarelectrodomesticoPageRoutingModule {}
