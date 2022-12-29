import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackListRoutingModule } from './track-list-routing.module';
import { TrackListComponent } from './pages/track-list/track-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DataModule } from 'src/app/data/data.module';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    TrackListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    DataModule,
    TrackListRoutingModule
  ]
})
export class TrackListModule { }
