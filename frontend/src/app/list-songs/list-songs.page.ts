import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.page.html',
  styleUrls: ['./list-songs.page.scss'],
})
export class ListSongsPage implements OnInit {

  songs: any = [];
  searchedSong: any;
  hasPhoto: string = "";

  constructor(private songService: SongService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllSongs();
  }

  getAllSongs() {
    this.songService.getSongs().subscribe(s => {
      this.songs = s;
      this.searchedSong = this.songs;
    })
  }

  addSong(){
    this.router.navigateByUrl("/add-song");
  }

  searchSongs(event){
    const text = event.target.value;
    this.searchedSong = this.songs;
    if(text && text.trim() != ''){
      this.searchedSong = this.searchedSong.filter((song: any)=>{
        return(song.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
}
