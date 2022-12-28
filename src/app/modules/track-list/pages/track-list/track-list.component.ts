import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { MusicService } from 'src/app/data/service/music.service';
import { EndOfPageScrollService } from 'src/app/core/services/end-of-page-scroll.service';
import { Track } from 'src/app/data/types/track.model';
import { Subscription } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit, OnDestroy {
  tracks: Track[] = [];
  current_page_number: number = 1;
  last_page_reached: boolean = false;
  loading: boolean = false;
  end_of_page_scroll_subscription: Subscription;

  constructor(private music_service: MusicService, private end_of_page_scroll_service: EndOfPageScrollService) {}

  ngOnInit(): void {
    this.get_tracks();
    this.end_of_page_scroll_subscription = this.end_of_page_scroll_service.end_of_page_scroll$.subscribe((event: Event) => {
      this.get_tracks();
    });
  }

  get_tracks(): void {
    if(!this.last_page_reached && !this.loading) {
      this.loading = true;
      this.music_service.get_tracks(this.current_page_number).subscribe((data: any) => {
        if(data.next == null) {
          this.last_page_reached = true;
        }
        this.set_next_page();
        this.loading = false;
        this.append_fetched_tracks(data.results);
      });
    }
  }

  append_fetched_tracks(fetched_tracks: Track[]): void {
    this.tracks = this.tracks.concat(fetched_tracks);
  }

  set_next_page(): void {
    this.current_page_number++;
  }

  on_play(track: Track) {
    console.log("Playing: ", track.name);
  }

  ngOnDestroy(): void {
    if(this.end_of_page_scroll_subscription) this.end_of_page_scroll_subscription.unsubscribe();
  }
}
