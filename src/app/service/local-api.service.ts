import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweet } from '../tweet-list/ITweet';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  private localUrl: string = "assets/data/trumpTweets.json"
  
  constructor(private http: HttpClient) { }
  
  getTweets(): Observable<ITweet[]> {
    return this.http.get<ITweet[]>(this.localUrl);
  }
}
