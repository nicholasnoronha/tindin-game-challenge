import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "src/app/interfaces/Game";

@Pipe({ name: 'formatArrayIntoStringPipe'})
export class FormatArrayIntoStringPipe implements PipeTransform {
    transform(tagsArray?: string[]) {
        if (tagsArray?.length) {
            const tags = tagsArray?.join(',');
            // console.log('tags :>> ', tags);
            return tags.replace(/,/g, ', ')
        }
        return ''
    }
}