import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../services/auth-service";

@Injectable()
export class SpotifyApiAuthInit implements CanActivate
{
    constructor(private authService: AuthService) { }

    canActivate(): boolean {
        if (this.authService.hasAccessToken()) {
            return true;
        }

        this.authService.init();
    }   
}