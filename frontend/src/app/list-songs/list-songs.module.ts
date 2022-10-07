import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongsPageRoutingModule } from './list-songs-routing.module';

import { ListSongsPage } from './list-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongsPageRoutingModule
  ],
  declarations: [ListSongsPage]
})
export class ListSongsPageModule {}
