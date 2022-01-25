import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { HighlightSearchPipe } from './tweet-list/highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
