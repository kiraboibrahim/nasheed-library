import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListRoutingModule } from './artist-list-routing.module';
import { ArtistListComponent } from './pages/artist-list.component';


@NgModule({
  declarations: [
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    ArtistListRoutingModule
  ]
})
export class ArtistListModule { }
