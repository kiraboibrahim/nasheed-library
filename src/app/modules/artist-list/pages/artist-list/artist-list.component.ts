import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { MusicService } from 'src/app/data/service/music.service';
import { Artist } from 'src/app/data/types/artist.model';
import { EndOfPageScrollService } from 'src/app/core/services/end-of-page-scroll.service';


@Component({
  selector: 'page-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit, OnDestroy {
  artists: Artist[] = [];
  current_page_number: number = 1;
  last_page_reached: boolean = false;
  loading: boolean = false;
  end_of_page_scroll_subscription: Subscription;

  constructor(private music_service: MusicService, private end_of_page_scroll_service: EndOfPageScrollService) {}

  ngOnInit(): void {
    this.get_artists();
    this.end_of_page_scroll_subscription = this.end_of_page_scroll_service.end_of_page_scroll$.subscribe((event: Event) => {
      this.get_artists();
    });
  }

  get_artists(): void {
    if(!this.last_page_reached && !this.loading) {
      this.loading = true;
      this.music_service.get_artists(this.current_page_number).subscribe((data: any) => {
        if(data.next == null) {
          this.last_page_reached = true;
        }
        this.loading = false;
        this.set_next_page();
        this.append_fetched_artists(data.results);
      });
    }
  }

  append_fetched_artists(fetched_artists: Artist[]): void {
    this.artists = this.artists.concat(fetched_artists);
  }

  set_next_page(): void {
    this.current_page_number++;
  }

  ngOnDestroy(): void {
    if(this.end_of_page_scroll_subscription) this.end_of_page_scroll_subscription.unsubscribe();
  }
}
