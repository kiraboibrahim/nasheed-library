import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Track } from 'src/app/data/types/track.model';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent {
  @Input() track: Track;
  @Output() play: EventEmitter<Track> = new EventEmitter<Track>();

  play_track() {
    this.play.emit(this.track);
  }
}
