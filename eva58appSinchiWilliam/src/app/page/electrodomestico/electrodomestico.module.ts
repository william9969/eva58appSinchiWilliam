import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrodomesticoPageRoutingModule } from './electrodomestico-routing.module';

import { ElectrodomesticoPage } from './electrodomestico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectrodomesticoPageRoutingModule
  ],
  declarations: [ElectrodomesticoPage]
})
export class ElectrodomesticoPageModule {}
