import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalApiService } from '../service/local-api.service';
import { ITweet } from './ITweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  // Fields
  pageTitle: string = 'Donald Trumps tweets!'  
  filteredTweets: ITweet[] = [];
  tweets: ITweet[] = [];
  sub!: Subscription;

  constructor(private tweetsService: LocalApiService) { 
    
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
      tweet.text.toLocaleLowerCase().includes(filterBy));
  }
  // search region #end

  ngOnInit(): void {
    this.sub = this.tweetsService.getTweets().subscribe({
      next: tweets => {
        this.tweets = tweets;
        this.filteredTweets = this.tweets;
      }
    });
  }  

}
