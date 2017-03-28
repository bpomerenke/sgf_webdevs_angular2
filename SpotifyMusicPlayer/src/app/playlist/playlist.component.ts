import { Component, OnInit, Input } from '@angular/core';
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
    @Input() searchTerm: string;

    ngOnInit(): void {
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
            this.loadTrack(tracks[0]);
        });
    }

    getTracks(): Track[] {
        if (!this.playlist) return [];
        if (!this.searchTerm || this.searchTerm.length === 0) return this.playlist;

        return this.playlist.filter(track => track.hasInfoMatching(this.searchTerm));
    }
    
    hasPreview(track: Track): boolean {
        return track.preview !== null;
    }

    loadTrack(track: Track): boolean {
        this.currentTrack = track;
        if (!this.hasPreview(track)) {
            this.waveSurfer.empty();
            return false;
        }
        this.playlistVisible = false;
        this.waveSurfer.load(track.preview);
        return true;
    }

    loadAndPlayTrack(track: Track): void {
        if(this.loadTrack(track)) {
            this.playTrack();            
        }
    }

    prevTrack(): void {
        this.waveSurfer.stop();
        let curTrackIdx = this.playlist.indexOf(this.currentTrack);
        let prevTrackIdx = (curTrackIdx - 1) % this.playlist.length;
        this.loadAndPlayTrack(this.playlist[prevTrackIdx]);
    }

    nextTrack(): void {
        this.waveSurfer.stop();
        let curTrackIdx = this.playlist.indexOf(this.currentTrack);
        let nextTrackIdx = (curTrackIdx + 1) % this.playlist.length;
        this.loadAndPlayTrack(this.playlist[nextTrackIdx]);        
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
