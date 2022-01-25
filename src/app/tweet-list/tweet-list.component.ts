import { Component, OnInit } from '@angular/core';
import { ITweet } from './ITweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  pageTitle: string = 'Donald Trumps tweets!'

  
  filteredTweets: ITweet[] = [];
  tweets: ITweet[] = [
    { tweet: "This is a Tweet", date: "9/11-2011", likes: 666 },
    { tweet: "This is a second Tweet", date: "24/12-2202", likes: 999 },
    { tweet: "This is the third Tweet", date: "8/6-2002", likes: -99 }
  ];

  constructor() { 
    this.filteredTweets = this.tweets;
  }

  // search region #start
  private _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter;
    this.filteredTweets = this.performFilter(value);
  }
  performFilter(filterBy: string): ITweet[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tweets.filter((tweet: ITweet) =>
      tweet.tweet.toLocaleLowerCase().includes(filterBy));
  }
  // search region #end

  

  ngOnInit(): void {
  }

  

}
