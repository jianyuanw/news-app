import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('', Validators.required),
      comments: this.fb.control('', Validators.required)
    });
  }

  post(): void {
    const title = this.form.get('title').value;
    const comments = this.form.get('comments').value;
    const body = {
      title,
      comments,
      imageSrc: 'source'
    };
    this.http.post<string>(`${SERVER_URL}/api/articles`, body).toPromise()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  clear(): void {

  }

  capture(): void {
    this.router.navigateByUrl('articles/capture');
  }
}
