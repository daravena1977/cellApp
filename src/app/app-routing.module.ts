import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./accesorios/accesorios.module').then(m => m.AccesoriosModule),
  },
  {
    path: 'reparaciones',
    loadChildren: () => import('./reparaciones/reparaciones.module').then(m => m.ReparacionesModule),
  },
  {
    path: 'repuestos',
    loadChildren: () => import('./repuestos/repuestos.module').then(m => m.RepuestosModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'reparaciones',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
