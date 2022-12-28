import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
