import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarelectrodomesticoPageRoutingModule } from './listarelectrodomestico-routing.module';

import { ListarelectrodomesticoPage } from './listarelectrodomestico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarelectrodomesticoPageRoutingModule
  ],
  declarations: [ListarelectrodomesticoPage]
})
export class ListarelectrodomesticoPageModule {}
