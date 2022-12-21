import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackListComponent } from './track-list.component';

const routes: Routes = [{ path: '', component: TrackListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackListRoutingModule { }
