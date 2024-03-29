import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material.module';
import { TrackItemComponent } from './components/track-item/track-item.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { ArtistItemComponent } from './components/artist-item/artist-item.component';
import { FormatAudioDurationPipe } from './pipes/format-audio-duration.pipe';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NgModelDebounceChangeDirective } from './directives/ng-model-debounce-change/ng-model-debounce-change.directive';
import { CorsDownloadDirective } from './directives/cors-download/cors-download.directive';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

@NgModule({
  declarations: [
    TrackItemComponent,
    TrackListComponent,
    ArtistItemComponent,
    ArtistListComponent,
    FormatAudioDurationPipe,
    AudioPlayerComponent,
    ProgressSpinnerComponent,
    NgModelDebounceChangeDirective,
    CorsDownloadDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ArtistItemComponent,
    ArtistListComponent,
    TrackItemComponent,
    TrackListComponent,
    AudioPlayerComponent,
    ProgressSpinnerComponent,
    NgModelDebounceChangeDirective,
    CorsDownloadDirective,
  ]
})
export class SharedModule { }
