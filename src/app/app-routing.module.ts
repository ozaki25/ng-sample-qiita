import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QiitaCommentsComponent } from './qiita-comments/qiita-comments.component';
import { QiitaNewCommentComponent } from './qiita-new-comment/qiita-new-comment.component';

const routes: Routes = [
  { path: 'comments', component: QiitaCommentsComponent },
  { path: 'comments/new', component: QiitaNewCommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
