import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "./services/playlist.service";

@Component({
  moduleId: module.id,
  selector: 'spotify-music-player',
  templateUrl: 'app.component.html'
})
export class AppComponent{
    queryResponse: String;

    constructor(private playlistService: PlaylistService) { }

    hasAccessToken(): boolean {
        return this.playlistService.accessToken.length > 0;
    }

    initAuth(): void {
        this.playlistService.initializeAuth();
    };
}
