import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutRepuestosComponent } from './pages/layout-repuestos/layout-repuesto.component';
import { NewRepuestoComponent } from './pages/new-repuesto/new-repuesto.component';
import { RepuestosRoutingModule } from './repuestos-routing.module';
import { SearchRepuestoComponent } from './pages/search-repuesto/search-repuesto.component';


@NgModule({
  declarations: [
    LayoutRepuestosComponent,
    NewRepuestoComponent,
    SearchRepuestoComponent
  ],
  imports: [
    CommonModule,
    RepuestosRoutingModule
  ]
})
export class RepuestosModule { }
