import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlaylistService } from './services/playlist.service'
import { AuthComponent } from "./auth/auth.component";
import { PlaylistComponent } from "./playlist/playlist.component";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, AuthComponent, PlaylistComponent ],
  bootstrap: [ AppComponent ],
  providers: [ PlaylistService ]
})
export class AppModule { }
