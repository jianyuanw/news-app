import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SERVER_URL } from '../constants';
import { Article } from '../models';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Article[]>(`${SERVER_URL}/api/articles`).toPromise()
      .then(data => {
        data.forEach(article => {
          article.imageDataUrl = 'data:' + article.imageMimeType + ';base64,'
              + article.imageBuffer;
        });
        this.articles = data;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
