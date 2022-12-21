import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist-list.component';

const routes: Routes = [{ path: '', component: ArtistListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistListRoutingModule { }
