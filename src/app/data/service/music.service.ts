import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Artist } from '../types/artist.model';


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private api_base_url: string = environment.music_api_base_url

  constructor(private http: HttpClient) {}

  get_artist(artist_id: string): Observable<Artist> {
    let artist: Artist;
    let url: string = `${this.api_base_url}/artists/${artist_id}`;
    return this.http.get<Artist>(url);
  }

  get_artist_tracks(artist: Artist, page_number: number = 1): Observable<any> {
    let url: string = `${this.api_base_url}/artists/${artist.id}/tracks?page=${page_number}`;
    return this.http.get(url);
  }

  get_artists(page_number: number): Observable<any> {
    let url = `${this.api_base_url}/artists?page=${page_number}`;
    return this.http.get(url);
  }

  get_tracks(page_number: number): Observable<any> {
    let url = `${this.api_base_url}/tracks?page=${page_number}`;
    return this.http.get(url);
  }

  search_tracks(query: string, page_number: number) {
    let url = `${this.api_base_url}/tracks/search/${query}?page=${page_number}`;
    return this.http.get(url);
  }

  search_artists(query: string, page_number: number) {
    let url = `${this.api_base_url}/artists/search/${query}?page=${page_number}`;
    return this.http.get(url);
  }
}
