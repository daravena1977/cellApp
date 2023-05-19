import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAccesoriosComponent } from './pages/layout-accesorios/layout-accesorios.component';
import { NewAccesorioComponent } from './pages/new-accesorio/new-accesorio.component';
import { SearchAccesorioComponent } from './pages/search-accesorio/search-accesorio.component';
import { AccesorioPageComponent } from './pages/accesorio-page/accesorio-page.component';

// localhost:4200/accesorios/''
const routes: Routes = [
  {
    path: '',
    component: LayoutAccesoriosComponent,
    children: [
      {path: 'new-accesorio', component: NewAccesorioComponent},
      {path: 'search-accesorio', component: SearchAccesorioComponent},
      {path: 'edit/:id', component: NewAccesorioComponent},
      {path: ':id', component: AccesorioPageComponent},
      {path: '**', redirectTo: 'new-accesorio'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoriosRoutingModule { }
