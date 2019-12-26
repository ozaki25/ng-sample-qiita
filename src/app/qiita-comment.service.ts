import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QiitaComment } from './qiita-comment';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QiitaCommentService {
  private url = 'https://qiita.com/api/v2/items/7c780fc2e98952562fe4/comments';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.qiitaApiKey}`,
    }),
  };

  constructor(private http: HttpClient) {}

  create(comment: string): Observable<QiitaComment> {
    return this.http.post<QiitaComment>(
      this.url,
      { body: comment },
      this.httpOptions,
    );
  }

  getComments(): Observable<QiitaComment[]> {
    return this.http.get<QiitaComment[]>(this.url);
  }
}
