import { Photo } from "./Photo";

export interface Game {
    title: string;
    description: string;
    _id?: string;
    resume?: string;
    rating?: number;
    totalVotes?: number;
    photos?: Photo[];
    videos?: Object[];
    mediumPrice?: number;
    studio?: any;
    company?: any;
    releaseYear?: number;
    genres?: string[];
    platforms?: string[];
    tags?: string[];
}