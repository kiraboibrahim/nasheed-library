import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { Track } from 'src/app/data/types/track.model';
import { Artist } from 'src/app/data/types/artist.model';
import { EndOfPageScrollService } from 'src/app/core/services/end-of-page-scroll.service';
import { MusicService } from 'src/app/data/service/music.service';
import { isThisTypeNode } from 'typescript';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tracks: Track[] = [];
  loading_tracks: boolean = true;
  tracks_page_number: number = 1;
  reached_last_page_of_tracks_results: boolean = false;

  artists: Artist[] = [];
  loading_artists: boolean = false;
  artists_page_number: number = 1;
  reached_last_page_of_artists_results: boolean = false;

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
      // The first time this route is loaded, the tracks tab is already active and the loading_tracks
      // property is true and yet fetching of tracks is prohibited when there is an ongoing
      // fetch.(Multiple subscriptions). The search method takes an initial_search argument to
      // inform it if it is the time when the page is loaded to allow fetching of tracks
      this.search(true);
    });
    this.end_of_page_scroll_service.end_of_page_scroll$.subscribe((event: Event) => {
      this.search();
    });
  }

  on_submit(form: NgForm) {
    this.router.navigate(["search", form.value.query]);
    this.reset_search();
    this.search();
  }

  reset_search(): void {
    this.tracks = [];
    this.loading_tracks = this.search_context == "tracks" ? true : false;
    this.tracks_page_number = 1;
    this.reached_last_page_of_tracks_results = false;

    this.artists = [];
    this.loading_artists = this.search_context == "artists" ? true : false;
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

  search(initial_search: boolean = false): void {
    if(this.query) {
      switch(this.search_context) {
        case "artists":
          this.search_artists(initial_search);
          break;
        case "tracks":
          this.search_tracks(initial_search);
          break;
      }
    } else {
      this.loading_artists = false;
      this.loading_tracks = false;
    }
  }

  search_artists(initial_search: boolean = false) {
    if(!this.reached_last_page_of_artists_results && (!this.loading_artists || initial_search)) {
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

  search_tracks(initial_search: boolean = false) {
    if(!this.reached_last_page_of_tracks_results && (!this.loading_tracks || initial_search)) {
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
}
