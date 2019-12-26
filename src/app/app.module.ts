import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QiitaCommentsComponent } from './qiita-comments/qiita-comments.component';
import { QiitaNewCommentComponent } from './qiita-new-comment/qiita-new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    QiitaCommentsComponent,
    QiitaNewCommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
