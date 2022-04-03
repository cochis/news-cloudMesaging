import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsResponse, Article, ArticlesByCategoryAndPage } from '../interfaces/interfaces';
const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articlesByCategoryAndPage: ArticlesByCategoryAndPage = {};
  constructor(private http: HttpClient) { }

  getTopHeadLineByCategory(category: string, dateI?: string, dateF?: string, last?: boolean): Observable<Article[]> {
    const headers = new HttpHeaders()
      .set('X-Api-Key', apiKey)
      .set('Authorization', apiKey);
    if (last) {
      var dt = new Date();
      return this.http.get<NewsResponse>(`${apiUrl}/everything?language=es&q=${category}&from=${dt.toISOString()}&to=${dt.toISOString()}&sortBy=publishedAt`, { 'headers': headers, params: { apiKey } }).pipe(
        map(({ articles }) => articles)
      );
    }
    else if (dateI != undefined && dateF != undefined) {
      console.log(`country=mx&category=${category}&from=${dateI}&to=${dateF}`)

      return this.http.get<NewsResponse>(`${apiUrl}/everything?language=es&q=${category}&from=${dateI}&to=${dateF}&sortBy=publishedAt`, { 'headers': headers, params: { apiKey } }).pipe(
        map(({ articles }) => articles)
      );
    } else {
      return this.http.get<NewsResponse>(`${apiUrl}/everything?language=es&q=${category}&sortBy=publishedAt`, { 'headers': headers, params: { apiKey } }).pipe(
        map(({ articles }) => articles)
      );

    }
  }
  getAll() {

    return this.http.get<NewsResponse>(`${apiUrl}/top-headlines?country=mx`, { params: { apiKey } }).pipe(
      map(({ articles }) => articles)
    );
  }
}
