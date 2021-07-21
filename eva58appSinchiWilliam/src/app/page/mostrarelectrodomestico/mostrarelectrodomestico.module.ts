import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarelectrodomesticoPageRoutingModule } from './mostrarelectrodomestico-routing.module';

import { MostrarelectrodomesticoPage } from './mostrarelectrodomestico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarelectrodomesticoPageRoutingModule
  ],
  declarations: [MostrarelectrodomesticoPage]
})
export class MostrarelectrodomesticoPageModule {}
