import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PlaylistService } from "../services/playlist.service";
import { AuthService } from "../services/auth-service";

@Component({
    moduleId: module.id,
    selector: 'auth-component',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }
    
    ngOnInit(): void {
        this.activatedRoute.fragment.subscribe((fragment: String) => {
            console.log('fragment: ', fragment);
            if (fragment && fragment.length > 'access_token'.length) {
                let accessTokenFrag = fragment.split('&')[0].split('=')[1];
                let expiresAtFrag = fragment.split('&')[2].split('=')[1];

                if (accessTokenFrag !== '') {
                    this.authService.setAccessToken(accessTokenFrag, +expiresAtFrag);
                    this.router.navigate(["playlist"]);
                }   
            }
        });
    }

}
