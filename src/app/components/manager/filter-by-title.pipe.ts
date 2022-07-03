import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "src/app/interfaces/Game";

@Pipe({ name: 'filterByTitle'})
export class FilterByTitle implements PipeTransform {
    transform(games: Game[], titleQuery: string) {
        titleQuery = titleQuery.trim().toLowerCase()

        if (titleQuery) {
            return games.filter(game => game.title.toLowerCase().includes(titleQuery) )
        }
        return games
    }
}