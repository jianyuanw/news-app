import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVER_URL } from '../constants';
import { Article } from '../models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<Article>(`${SERVER_URL}/api/articles/${id}`)
        .toPromise()
        .then(data => {
          console.log(data);
          this.article = data;
          this.article.imageDataUrl = 'data:' + this.article.imageMimeType
              + ';base64,' + this.article.imageBuffer;
        })
        .catch(err => console.log(err));
  }
}
