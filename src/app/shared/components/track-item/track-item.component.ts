import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Track } from 'src/app/data/types/track.model';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() track: Track;
  @Output() play: EventEmitter<Track> = new EventEmitter<Track>();
  filename: string;

  ngOnInit(): void {
    this.filename = `${this.track.artist.name} - ${this.track.name}.mp3`;
  }
  play_track(event: Event) {
    event.stopPropagation();
    this.play.emit(this.track);
  }
}
