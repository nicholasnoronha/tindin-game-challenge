export interface Game {
    title: string;
    description: string;
    photos?: Object[];
    videos?: Object[];
    mediumPrice?: number;
    studio?: any;
    company?: any;
    releaseYear?: number;
    genres?: string[];
    platforms?: string[];
    tags?: string[];
}