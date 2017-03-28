import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PlaylistService } from "../services/playlist.service";

@Injectable()
export class SpotifyApiAuthInit implements CanActivate
{
    constructor(private playlistService: PlaylistService) { }

    canActivate(): boolean {
        if (this.playlistService.accessToken.length > 0) {
            return true;
        }

        this.playlistService.initializeAuth();
    }   
}