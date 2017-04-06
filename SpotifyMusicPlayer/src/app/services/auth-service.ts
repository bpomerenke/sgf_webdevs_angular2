import { URLSearchParams } from '@angular/http';

export class AuthToken {
    token: string;
    expiration: number;
}

export class AuthService {

    private clientId = '<SPOTIFY CLIENT ID>';
    private LOCAL_STORAGE_KEY = 'spotifyAccessToken';

    init(): void {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', this.clientId);
        params.set('response_type', 'token');
        params.set('redirect_uri', encodeURI('http://localhost:3000/auth'));
        let authorizeBaseUrl = 'https://accounts.spotify.com/authorize?' + params.toString();

        window.location.href = authorizeBaseUrl;
    }

    hasAccessToken(): boolean {
        let currentToken = this.read<AuthToken>(this.LOCAL_STORAGE_KEY);
        return !!currentToken && currentToken.expiration > new Date().getTime();
    }

    setAccessToken(accessToken: string, timeToLive: number): void {
        let authToken: AuthToken = { token: accessToken, expiration: new Date(new Date().getTime() + 1000 * timeToLive).getTime() }
        this.write(this.LOCAL_STORAGE_KEY, authToken);
    }

    getAccessToken(): string {
        let currentToken = this.read<AuthToken>(this.LOCAL_STORAGE_KEY);
        return currentToken.token;
    }
    getExpiration(): Date {
        let currentToken = this.read<AuthToken>(this.LOCAL_STORAGE_KEY);
        return new Date(currentToken.expiration);
    }

    private write(key: string, value: any) : void {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    private read<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }
}