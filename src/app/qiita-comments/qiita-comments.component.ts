import { Component, OnInit } from '@angular/core';
import { QiitaCommentService } from '../qiita-comment.service';
import { QiitaComment } from '../qiita-comment';

@Component({
  selector: 'app-qiita-comments',
  templateUrl: './qiita-comments.component.html',
  styleUrls: ['./qiita-comments.component.scss'],
})
export class QiitaCommentsComponent implements OnInit {
  comments: QiitaComment[] = [];

  constructor(private qiitaCommentService: QiitaCommentService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.qiitaCommentService
      .getComments()
      .subscribe(comments => (this.comments = comments));
  }
}
