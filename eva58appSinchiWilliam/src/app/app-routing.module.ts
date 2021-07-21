import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'page/electrodomestico',
    loadChildren: () => import('./page/electrodomestico/electrodomestico.module').then( m => m.ElectrodomesticoPageModule)
  },
  {
    path: 'page/listarelectrodomestico',
    loadChildren: () => import('./page/listarelectrodomestico/listarelectrodomestico.module').then( m => m.ListarelectrodomesticoPageModule)
  },
  {
    path: 'page/mostrarelectrodomestico',
    loadChildren: () => import('./page/mostrarelectrodomestico/mostrarelectrodomestico.module').then( m => m.MostrarelectrodomesticoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
