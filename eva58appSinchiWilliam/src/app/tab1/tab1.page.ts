import { Component } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  crear(){
    this.router.navigate(["page/electrodomestico"])
  }
  listar(){
    console.log("Presionado")
    this.router.navigate(["page/listarelectrodomestico"])
  }
  buscar(){
    this.router.navigate(["page/mostrarelectrodomestico"])
  }

}
