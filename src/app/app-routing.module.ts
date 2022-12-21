import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'artists', loadChildren: () => import('./modules/artist-list/artist-list.module').then(m => m.ArtistListModule) }, { path: 'tracks', loadChildren: () => import('./modules/track-list/track-list.module').then(m => m.TrackListModule) }, { path: 'artists', loadChildren: () => import('./modules/artist-list/artist-list.module').then(m => m.ArtistListModule) }, { path: 'tracks', loadChildren: () => import('./modules/track-list/track-list.module').then(m => m.TrackListModule) }, { path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
