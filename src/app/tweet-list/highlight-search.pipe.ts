import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { TweetListComponent } from './tweet-list.component';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

   /* use this for single match search */
   static SINGLE_MATCH: string = "Single-Match";
   /* use this for single match search with a restriction that target should start with search string */
   static SINGLE_AND_STARTS_WITH_MATCH: string = "Single-And-StartsWith-Match";
   /* use this for global search */
   static MULTI_MATCH: string = "Multi-Match";

   constructor() {}
   transform(
       contentString: string ,
       stringToHighlight: string ,
       option: string = "Single-And-StartsWith-Match",
       caseSensitive: boolean = false,
       highlightStyleName: string = "search-highlight"
   ): SafeHtml {
       if (stringToHighlight && contentString && option) {
           let regex: any = "";
           let caseFlag: string = !caseSensitive ? "i" : "";
           switch (option) {
               case "Single-Match": {
                   regex = new RegExp(stringToHighlight, caseFlag);
                   break;
               }
               case "Single-And-StartsWith-Match": {
                   regex = new RegExp("^" + stringToHighlight, caseFlag);
                   break;
               }
               case "Multi-Match": {
                   regex = new RegExp(stringToHighlight, "g" + caseFlag);
                   break;
               }
               default: {
                   // default will be a global case-insensitive match
                   regex = new RegExp(stringToHighlight, "gi");
               }
           }
           const replaced = contentString.replace(
               regex,
               (match) => `<span class="${highlightStyleName}">${match}</span>`
           );
           return replaced;
       } else {
           return contentString;
       }
   }

}
