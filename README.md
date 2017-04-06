# Setup details

## Prerequisites
* Download / Install Node.js
* Setup a developer account with Spotify here: https://developer.spotify.com/
  * will need to whitelist `http://localhost:3000/auth` for application to work
* Clone repository

## Start application
* Please replace `<SPOTIFY CLIENT ID>` in `~/SpotifyMusicPlayer/src/app/services/auth-service.ts` with a valid client ID for your spotify developer account
* `cd SpotifyMusicPlayer`
* `npm install`
* `npm run start`
* will open a browser with application running on localhost:3000 and redirect you to spotify login, once logged in the app will load (note: implicit grant auth will expire after 60 min and may require you to reload the application)
