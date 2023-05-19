import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRepuestosComponent } from './pages/layout-repuestos/layout-repuesto.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRepuestosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepuestosRoutingModule { }
