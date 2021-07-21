import { Component, OnInit } from '@angular/core';
import { Electrodomestico } from 'src/app/domain/electrodomestico';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-mostrarelectrodomestico',
  templateUrl: './mostrarelectrodomestico.page.html',
  styleUrls: ['./mostrarelectrodomestico.page.scss'],
})
export class MostrarelectrodomesticoPage implements OnInit {
  electrodomestico:any;
  nombre:string;
  constructor( private electrodomesticoService: ElectrodomesticoService) { }

  ngOnInit() {
   
  }
  buscar(){
  
    this.electrodomestico=this.electrodomesticoService.searchElectodomestico(this.nombre);
    console.log(this.nombre)
    console.log(this.electrodomestico)
  }

}
