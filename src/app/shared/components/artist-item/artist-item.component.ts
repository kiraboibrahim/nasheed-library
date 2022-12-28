import { Component, Input } from '@angular/core';

import { Artist } from 'src/app/data/types/artist.model';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.scss']
})
export class ArtistItemComponent {
  @Input() artist: Artist;
}
