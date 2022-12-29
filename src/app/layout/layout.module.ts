import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
