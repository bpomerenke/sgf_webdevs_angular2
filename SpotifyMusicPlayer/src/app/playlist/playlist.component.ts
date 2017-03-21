import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PlaylistService } from "../services/playlist.service";
import { Track } from "./track";

declare var WaveSurfer: any; 

@Component({
    moduleId: module.id,
    selector: 'playlist-component',
    templateUrl: 'playlist.component.html'
})
export class PlaylistComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private playlistService: PlaylistService) { }

    playlist: Track[];
    waveSurfer: any;
    playlistVisible = false;
    currentTrack: Track;

    ngOnInit(): void {
        //TODO: there's a better way to do this
        if (this.playlistService.accessToken.length === 0) {
             this.router.navigate([""]);
             return;
        }
        this.waveSurfer = Object.create(WaveSurfer);
        this.waveSurfer.init({
            container: document.querySelector('#wave'),
            cursorColor: '#aaa',
            cursorWidth: 1,
            height: 80,
            waveColor: '#588efb',
            progressColor: '#f043a4',
            backend: 'MediaElement'
        });
        this.playlistService.getPlaylist().then((tracks) => {
            this.playlist = tracks;
            this.currentTrack = this.playlist[0];
        });
    }
    
    hasPreview(track: Track): boolean {
        return track.preview !== null;
    }

    loadAndPlayTrack(track: Track): void {
        if (!this.hasPreview(track)) return;
        this.playlistVisible = false;
        this.currentTrack = track;
        this.waveSurfer.load(track.preview);
        this.playTrack();
     }

    playTrack(): void {
        this.waveSurfer.play();
    }

    pauseTrack(): void {
        this.waveSurfer.pause();
    }

    stopTrack(): void {
        this.waveSurfer.stop();
    }

    togglePlaylist(): void {
        this.playlistVisible = !this.playlistVisible;
    }

    isPlaying(track: Track): boolean {
        return this.currentTrack === track;
    }
}
