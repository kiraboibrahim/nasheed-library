import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollService } from './services/scroll-service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ScrollService,
  ],
})
export class CoreModule { }
