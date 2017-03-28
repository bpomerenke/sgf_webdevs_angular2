import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { SpotifyApiAuthInit } from "./auth/spotify-api-auth-init";

const routes: Routes = [
    { path: "playlist", component: PlaylistComponent, canActivate: [SpotifyApiAuthInit] },
    { path: "auth", component: AuthComponent },
    { path: "**", redirectTo: "/playlist", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}