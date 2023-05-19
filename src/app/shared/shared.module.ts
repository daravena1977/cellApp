import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    Error404PageComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
