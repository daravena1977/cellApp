import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutReparacionesComponent } from './pages/layout-reparaciones/layout-reparaciones.component';
import { NewReparacionComponent } from './pages/new-reparacion/new-reparacion.component';
import { ReparacionesRoutingModule } from './reparaciones-routing.module';
import { SearchReparacionComponent } from './pages/search-reparacion/search-reparacion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutReparacionesComponent,
    NewReparacionComponent,
    SearchReparacionComponent
  ],
  imports: [
    CommonModule,
    ReparacionesRoutingModule,
    SharedModule
  ]
})
export class ReparacionesModule { }
