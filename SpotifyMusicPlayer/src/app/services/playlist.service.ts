import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Track } from "../playlist/track";

@Injectable()
export class PlaylistService {
    constructor(private http: Http) { }

    private clientId = '6d97a1cf9f0f4f97aa4795cda2723757';
    accessToken: String = '';

    initializeAuth(): void {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', this.clientId);
        params.set('response_type', 'token');
        params.set('redirect_uri', encodeURI('http://localhost:3000/auth'));
        let authorizeBaseUrl = 'https://accounts.spotify.com/authorize?' + params.toString();

        window.location.href = authorizeBaseUrl;
    }

    getPlaylist(): Promise<Track[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.accessToken });
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
                    newTrack.picture = item.track.album.images[2].url;
                    tracks.push(newTrack);
                }
                console.log("response: ", response.json());
                return tracks;
            });
    }

}