import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PlaylistService } from "../services/playlist.service";

@Component({
    moduleId: module.id,
    selector: 'auth-component',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private playlistService: PlaylistService) { }
    
    ngOnInit(): void {
        this.activatedRoute.fragment.subscribe((fragment: String) => {
            if (fragment && fragment.length > 'access_token'.length) {
                let accessTokenFrag = fragment.split('&')[0].split('=')[1];
                if (accessTokenFrag !== '') {
                    this.playlistService.accessToken = accessTokenFrag;
                    this.router.navigate(["playlist"]);
                }   
            }
        });
    }

}
