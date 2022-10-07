import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongsPage } from './list-songs.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongsPageRoutingModule {}
