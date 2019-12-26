import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QiitaComment } from './qiita-comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QiitaCommentService {
  private url = 'https://qiita.com/api/v2/items/7c780fc2e98952562fe4/comments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getComments(): Observable<QiitaComment[]> {
    return this.http.get<QiitaComment[]>(this.url);
  }
}
