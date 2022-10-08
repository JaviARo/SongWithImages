import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SongService } from './../services/song.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-song.page.html',
  styleUrls: ['./update-song.page.scss'],
})

export class UpdateSongPage implements OnInit {

  songForm: FormGroup;
  id: any;

  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(
    private songService: SongService,
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.songForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.fetchSong(this.id);
    this.songForm = this.formBuilder.group({
      name: ['h', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: ['', [Validators.required]],
      album: ['']
    })
  }

  get errorControl() {
    return this.songForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  fetchSong(id) {
    console.log("Adios");
    this.songService.getSong(id).subscribe((data) => {
      console.log(data['name']);
      this.songForm.setValue({
        name: "hola",
        duration: data['duration'],
        authors: data['authors'],
        album: data['album']
      });
    });
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.songForm.valid) {
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      this.songService.updateSong(this.id, this.songForm.value,blob)
        .subscribe(() => {
          this.songForm.reset();
          this.router.navigate(['/list-songs']);
        })
    }
  }

  gotoSongs() {
    this.router.navigateByUrl("/list-songs");
  }

}