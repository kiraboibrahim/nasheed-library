import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndOfPageScrollService } from './services/end-of-page-scroll.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EndOfPageScrollService,
  ],
})
export class CoreModule { }
