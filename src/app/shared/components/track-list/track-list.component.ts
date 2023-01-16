import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Track } from 'src/app/data/types/track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() tracks: Track[];
  @Output() play_track: EventEmitter<Track> = new EventEmitter<Track>();

  constructor() { }

  ngOnInit() {
  }

  on_play(track: Track) {
    this.play_track.emit(track);
  }
}
