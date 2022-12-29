import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ArtistListRoutingModule } from './artist-list-routing.module';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DataModule } from 'src/app/data/data.module';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistDetailComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    DataModule,
    ArtistListRoutingModule,
  ]
})
export class ArtistListModule { }
