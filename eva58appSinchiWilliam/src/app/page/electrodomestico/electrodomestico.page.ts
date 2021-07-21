import { Component, OnInit } from '@angular/core';
import { Electrodomestico } from 'src/app/domain/electrodomestico';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-electrodomestico',
  templateUrl: './electrodomestico.page.html',
  styleUrls: ['./electrodomestico.page.scss'],
})
export class ElectrodomesticoPage implements OnInit {
  electrodomestico:Electrodomestico = new Electrodomestico();

  constructor(private electrodomesticoService: ElectrodomesticoService,private router: Router) { }

  ngOnInit() {
  }

  guardar(){
    this.electrodomesticoService.save(this.electrodomestico);
    this.electrodomestico.nombre="";
    this.electrodomestico.marca="";
    this.electrodomestico.costo="";
    this.electrodomestico.anoFabricacion=""; 
  }

  cancelar(){
    this.router.navigate(["tabs/tab1"])
  }
}
