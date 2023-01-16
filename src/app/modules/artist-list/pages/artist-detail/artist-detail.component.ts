import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MusicService } from 'src/app/data/service/music.service';
import { EndOfPageScrollService } from 'src/app/core/services/end-of-page-scroll.service';
import { Track } from 'src/app/data/types/track.model';
import { Artist } from 'src/app/data/types/artist.model';
import { AudioPlayerComponent } from 'src/app/shared/components/audio-player/audio-player.component';


@Component({
  selector: 'page-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artist: Artist;
  artist_tracks: Track[] = [];
  tracks_page_number: number = 1;
  last_tracks_page_reached: boolean = false;
  loading: boolean = true;
  end_of_page_scroll_subscription: Subscription;

  @ViewChild(AudioPlayerComponent) audio_player: AudioPlayerComponent;

  constructor(private music_service: MusicService, private activated_route: ActivatedRoute, private end_of_page_scroll_service: EndOfPageScrollService) {}

  ngOnInit(): void {
    this.activated_route.paramMap.subscribe((params: ParamMap) => {
      let artist_id: any = params.get("artist_id");
      this.music_service.get_artist(artist_id).subscribe((artist: Artist) => {
        this.artist = artist;
        this.get_artist_tracks();
      })
    });
    this.end_of_page_scroll_subscription = this.end_of_page_scroll_service.end_of_page_scroll$.subscribe((event: Event) => {
      if(this.artist)  {
        this.get_artist_tracks();
      }
    });
  }

  set_next_tracks_page_number(): void {
    this.tracks_page_number++;
  }

  get_artist_tracks(): void {
    if(!this.last_tracks_page_reached) {
      this.loading = true;
      this.music_service.get_artist_tracks(this.artist, this.tracks_page_number).
      subscribe((data: any) => {
        if(data.next == null) {
          this.last_tracks_page_reached = true;
        }
        this.loading = false;
        this.set_next_tracks_page_number();
        this.append_fetched_artist_tracks(data.results);
      });
    }
  }

  append_fetched_artist_tracks(artist_tracks: Track[]): void {
    this.artist_tracks = this.artist_tracks.concat(artist_tracks);
  }

  ngOnDestroy(): void {
    if(this.end_of_page_scroll_subscription) this.end_of_page_scroll_subscription.unsubscribe();
  }

  on_play(track: Track) {
    this.audio_player.selectedAudio = track;
    this.audio_player.play();
  }
}
