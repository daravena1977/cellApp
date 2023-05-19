import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { LoginAuthComponent } from './pages/login-auth/login-auth.component';
import { MaterialModule } from '../material/material.module';
import { RegisterAuthComponent } from './pages/register-auth/register-auth.component';


@NgModule({
  declarations: [
    LayoutAuthComponent,
    LoginAuthComponent,
    RegisterAuthComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
  ]
})
export class AuthModule { }
