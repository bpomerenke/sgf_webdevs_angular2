import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "./services/playlist.service";

@Component({
  moduleId: module.id,
  selector: 'spotify-music-player',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
    queryResponse: String;

    constructor(private playlistService: PlaylistService) { }

    ngOnInit(): void {
    }
}
