import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QiitaCommentService } from '../qiita-comment.service';
import { QiitaComment } from '../qiita-comment';

@Component({
  selector: 'app-qiita-new-comment',
  templateUrl: './qiita-new-comment.component.html',
  styleUrls: ['./qiita-new-comment.component.scss'],
})
export class QiitaNewCommentComponent implements OnInit {
  comment = '';

  constructor(
    private qiitaCommentService: QiitaCommentService,
    private location: Location,
  ) {}

  ngOnInit() {}

  save(e: any): void {
    e.preventDefault();
    this.qiitaCommentService
      .create(this.comment)
      .subscribe(() => this.location.back());
  }
}
