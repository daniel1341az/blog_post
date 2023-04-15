import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTemplateComponent } from './blog-post-template/blog-post-template.component';
import { LargeRectangleAdComponent } from './large-rectangle-ad/large-rectangle-ad.component';
import { LeaderboardAdComponent } from './leaderboard-ad/leaderboard-ad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalAdComponent } from './vertical-ad/vertical-ad.component';
import { GoogleAdComponent } from './google-ad/google-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTemplateComponent,
    LargeRectangleAdComponent,
    LeaderboardAdComponent,
    NavbarComponent,
    VerticalAdComponent,
    GoogleAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
