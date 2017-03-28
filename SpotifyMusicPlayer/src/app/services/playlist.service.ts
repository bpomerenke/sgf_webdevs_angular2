import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Track } from "../playlist/track";
import { AuthService } from "./auth-service";

@Injectable()
export class PlaylistService {
    constructor(private http: Http, private authService: AuthService) { }

    getPlaylist(): Promise<Track[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.getAccessToken() });
        return this.http.get('https://api.spotify.com/v1/users/mykebates/playlists/4cyBTDzyrnGyNqEob5cIka', {headers: headers})
            .toPromise()
            .then((response: any) => {
                let json = response.json();
                let tracks: Track[] = [];
                for (var item of json.tracks.items) {
                    let newTrack = new Track();
                    newTrack.name = item.track.name;
                    newTrack.preview = item.track.preview_url;
                    newTrack.album = item.track.album.name;
                    newTrack.artist = item.track.artists[0].name;
                    newTrack.picture_large = item.track.album.images[0].url;
                    newTrack.picture = item.track.album.images[2].url;
                    tracks.push(newTrack);
                }
                console.log("response: ", response.json());
                return tracks;
            });
    }

}