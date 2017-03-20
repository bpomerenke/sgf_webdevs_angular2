import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { PlaylistComponent } from "./playlist/playlist.component";

const routes: Routes = [
    { path: "playlist", component: PlaylistComponent },
    { path: "auth", component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}