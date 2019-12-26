import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QiitaCommentsComponent } from './qiita-comments/qiita-comments.component';

const routes: Routes = [
  { path: 'comments', component: QiitaCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
