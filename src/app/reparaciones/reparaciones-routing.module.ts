import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutReparacionesComponent } from './pages/layout-reparaciones/layout-reparaciones.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutReparacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparacionesRoutingModule { }
