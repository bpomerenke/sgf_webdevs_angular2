import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlaylistService } from './services/playlist.service'
import { AuthComponent } from "./auth/auth.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { SpotifyApiAuthInit } from "./auth/spotify-api-auth-init";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, AuthComponent, PlaylistComponent ],
  bootstrap: [ AppComponent ],
  providers: [ PlaylistService, SpotifyApiAuthInit ]
})
export class AppModule { }
