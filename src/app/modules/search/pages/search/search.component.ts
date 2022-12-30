import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { Track } from 'src/app/data/types/track.model';
import { Artist } from 'src/app/data/types/artist.model';
import { EndOfPageScrollService } from 'src/app/core/services/end-of-page-scroll.service';
import { MusicService } from 'src/app/data/service/music.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  tracks: Track[] = [];
  loading_tracks: boolean = false;
  tracks_page_number: number = 1;
  reached_last_page_of_tracks_results: boolean = false;

  artists: Artist[] = [];
  loading_artists: boolean = false;
  artists_page_number: number = 1;
  reached_last_page_of_artists_results: boolean = false;

  end_of_page_scroll_subscription: Subscription;
  query: string | null;
  search_context: string = "tracks";

  constructor(private music_service: MusicService,
              private end_of_page_scroll_service: EndOfPageScrollService,
              private activated_route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit(): void {
    this.activated_route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get("query");
      this.search();
    });
    this.end_of_page_scroll_subscription = this.end_of_page_scroll_service.end_of_page_scroll$.subscribe((event: Event) => {
      this.search();
    });
  }

  on_submit(form: NgForm) {
    this.router.navigate(["search", form.value.query]).then((navigated: boolean | null) => {
      if(navigated == true) {
        this.reset_search();
        this.search();
      }
    });
  }

  reset_search(): void {
    this.tracks = [];
    this.loading_tracks = false;
    this.tracks_page_number = 1;
    this.reached_last_page_of_tracks_results = false;

    this.artists = [];
    this.loading_artists = false;
    this.artists_page_number = 1;
    this.reached_last_page_of_artists_results = false;
  }

  on_tab_change(event: MatTabChangeEvent) {
    switch(event.index) {
      case 0:
        this.search_context = "tracks";
        break;
      case 1:
        this.search_context = "artists";
        break;
    }
    if(this.tracks.length == 0 || this.artists.length == 0) this.search();
  }

  search(): void {
    if(!this.query) return;
    switch(this.search_context) {
      case "artists":
        this.search_artists();
        break;
      case "tracks":
        this.search_tracks();
        break;
    }
  }

  search_artists() {
    if(!this.reached_last_page_of_artists_results && !this.loading_artists) {
      this.loading_artists = true;
      this.music_service.search_artists(<string>this.query, this.artists_page_number).
      subscribe((data: any) => {
        if(data.next == null) this.reached_last_page_of_artists_results = true;
        this.loading_artists = false;
        this.artists_page_number++;
        this.artists = this.artists.concat(data.results);
      });
    }
  }

  search_tracks() {
    if(!this.reached_last_page_of_tracks_results && !this.loading_tracks) {
      this.loading_tracks = true;
      this.music_service.search_tracks(<string>this.query, this.tracks_page_number).
      subscribe((data: any) => {
        if(data.next == null) this.reached_last_page_of_tracks_results = true;
        this.loading_tracks = false;
        this.tracks_page_number++;
        this.tracks = this.tracks.concat(data.results);
      });
    } else {
      console.log(this.reached_last_page_of_tracks_results, this.loading_tracks);
    }
  }

  ngOnDestroy(): void {
    if(this.end_of_page_scroll_subscription) this.end_of_page_scroll_subscription.unsubscribe();
  }
}
