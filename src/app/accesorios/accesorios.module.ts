import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriosRoutingModule } from './accesorios-routing.module';
import { SearchAccesorioComponent } from './pages/search-accesorio/search-accesorio.component';
import { NewAccesorioComponent } from './pages/new-accesorio/new-accesorio.component';
import { LayoutAccesoriosComponent } from './pages/layout-accesorios/layout-accesorios.component';
import { AccesorioPageComponent } from './pages/accesorio-page/accesorio-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchAccesorioComponent,
    NewAccesorioComponent,
    LayoutAccesoriosComponent,
    AccesorioPageComponent
  ],
  imports: [
    CommonModule,
    AccesoriosRoutingModule,
    SharedModule,
  ]
})
export class AccesoriosModule { }
