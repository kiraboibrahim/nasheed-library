import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';

const routes: Routes = [
  { path: '', component: ArtistListComponent },
  {path: ":artist_id", component: ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistListRoutingModule { }
