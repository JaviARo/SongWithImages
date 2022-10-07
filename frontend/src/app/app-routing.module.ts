import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-songs',
    pathMatch: 'full'
  },
  {
    path: 'list-songs',
    loadChildren: () => import('./list-songs/list-songs.module').then( m => m.ListSongsPageModule)
  },
  {
    path: 'add-song',
    loadChildren: () => import('./add-song/add-song.module').then( m => m.AddSongPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
