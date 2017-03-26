export class Track {
    name: string;
    artist: string;
    album: string;
    preview: string;
    picture_large: string;
    picture: string;

    hasInfoMatching(searchTerm: string): boolean {
        let lowerCaseSearchTerm = searchTerm.toLowerCase();
        let nameMatch = this.name.toLowerCase().indexOf(lowerCaseSearchTerm) >= 0;
        let artistMatch = this.artist.toLowerCase().indexOf(lowerCaseSearchTerm) >= 0;
        let albumMatch = this.album.toLowerCase().indexOf(lowerCaseSearchTerm) >= 0;

        return nameMatch || artistMatch || albumMatch;
    }
}