import { URLSearchParams } from '@angular/http';

export class AuthService {

    private clientId = '6d97a1cf9f0f4f97aa4795cda2723757';

    init(): void {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', this.clientId);
        params.set('response_type', 'token');
        params.set('redirect_uri', encodeURI('http://localhost:3000/auth'));
        let authorizeBaseUrl = 'https://accounts.spotify.com/authorize?' + params.toString();

        window.location.href = authorizeBaseUrl;
    }

    hasAccessToken(): boolean {
        return this.getAccessToken() !== null;
    }

    setAccessToken(accessToken: string): void {
        this.write('spotifyAccessToken', accessToken);
    }

    getAccessToken(): string {
        return this.read<string>('spotifyAccessToken');
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