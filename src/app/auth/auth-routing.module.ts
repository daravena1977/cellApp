import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { LoginAuthComponent } from './pages/login-auth/login-auth.component';
import { RegisterAuthComponent } from './pages/register-auth/register-auth.component';

//localhost:4200/auth/''
const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      { path: 'login', component: LoginAuthComponent},
      { path: 'new-account', component: RegisterAuthComponent},
      { path: '**', redirectTo: 'login'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
