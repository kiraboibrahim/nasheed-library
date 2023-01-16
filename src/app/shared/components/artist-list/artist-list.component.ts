import { Component, OnInit, Input } from '@angular/core';

import { Artist } from 'src/app/data/types/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  @Input() artists: Artist[];

  constructor() { }

  ngOnInit() {
  }

}
