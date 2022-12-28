import { Artist } from "./artist.model";


export interface Track {
  id: string,
  name: string,
  file: string,
  artist: Artist,
  duration?: string
}
