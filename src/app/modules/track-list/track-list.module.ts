import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackListRoutingModule } from './track-list-routing.module';
import { TrackListComponent } from './pages/track-list.component';


@NgModule({
  declarations: [
    TrackListComponent
  ],
  imports: [
    CommonModule,
    TrackListRoutingModule
  ]
})
export class TrackListModule { }
