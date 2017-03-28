import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth-service";

@Component({
  moduleId: module.id,
  selector: 'spotify-music-player',
  templateUrl: 'app.component.html'
})
export class AppComponent{
    queryResponse: String;

    constructor(private authService: AuthService) { }

    hasAccessToken(): boolean {
        return this.authService.hasAccessToken();
    }

    initAuth(): void {
        this.authService.init();
    };
}
