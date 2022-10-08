import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  endPoint = "http://localhost:8080/api/songs";

  constructor(private httpClient: HttpClient) { }

  getSongs(){
    return this.httpClient.get(this.endPoint);
  }

  getSong(id){
    return this.httpClient.get(this.endPoint + '/' + id)
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

  updateSong(id, song, blob) {
    let formData = new FormData();
    formData.append("name", song.name);
    formData.append("duration", song.duration);
    formData.append("authors", song.authors);
    formData.append("album", song.album);
    formData.append("file", blob);

    return this.httpClient.put(this.endPoint + '/' + id, formData);  
  }

  deleteSong(id){
    return this.httpClient.delete(this.endPoint + '/' + id)
  }
}
