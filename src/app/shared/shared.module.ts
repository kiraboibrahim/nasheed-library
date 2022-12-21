import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';


@NgModule({
  declarations: [
    ArtistComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
