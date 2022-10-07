import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  endPoint = "http://localhost:8080/api/songs";

  constructor(private httpClient: HttpClient) { }

  getSongs(){
    return this.httpClient.get(this.endPoint);
  }

  createSong(song, blob){
    let formData = new FormData();
    formData.append("name", song.name);
    formData.append("duration", song.duration);
    formData.append("authors", song.authors);
    formData.append("album", song.album);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }
}
