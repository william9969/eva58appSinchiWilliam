import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
@Component({
  selector: 'app-listarelectrodomestico',
  templateUrl: './listarelectrodomestico.page.html',
  styleUrls: ['./listarelectrodomestico.page.scss'],
})
export class ListarelectrodomesticoPage implements OnInit {
  electrodmesticos: any;
  constructor(private router: Router,
    private electrodomesticoService: ElectrodomesticoService) { }

  ngOnInit() {
    this.electrodmesticos=this.electrodomesticoService.getElectrodomesticos();
  }
  crear(){
    this.router.navigate(["/page/electrodomestico"])
  }

}
