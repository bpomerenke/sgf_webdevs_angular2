import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PlaylistService } from "../services/playlist.service";
import { Track } from "./track";

@Component({
    moduleId: module.id,
    selector: 'playlist-component',
    templateUrl: 'playlist.component.html'
})
export class PlaylistComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private playlistService: PlaylistService) { }

    playlist: Track[];

    ngOnInit(): void {
        this.playlistService.getPlaylist().then((tracks) => {
            this.playlist = tracks;
        });
    }
    
    hasPreview(track: Track): boolean {
        return track.preview !== null;
    }
}
