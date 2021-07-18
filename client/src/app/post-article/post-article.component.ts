import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { SERVER_URL } from '../constants';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  imagePlaceholderSrc = '../../assets/cactus.jpg';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    let title = '';
    let comments = '';
    if (localStorage.getItem('title')) {
      title = localStorage.getItem('title');
    }
    if (localStorage.getItem('comments')) {
      comments = localStorage.getItem('comments');
    }

    this.form = this.fb.group({
      title: this.fb.control(title, Validators.required),
      comments: this.fb.control(comments, Validators.required)
    });

    if (localStorage.getItem('imageSrc')) {
      this.imageSrc = localStorage.getItem('imageSrc');
    } else {
      this.imageSrc = this.imagePlaceholderSrc;
    }
  }

  post(): void {
    const title = this.form.get('title').value;
    const comments = this.form.get('comments').value;
    const imageFile = this.imageDataUrlToFile(this.imageSrc);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('comments', comments);
    formData.append('imageFile', imageFile);

    this.http.post<any>(`${SERVER_URL}/api/articles`, formData).toPromise()
      .then(data => {
        console.log(data);
        this.clear();
        this.alertService.sendAlert('Article posted successfully!');
      })
      .catch(err => {
        console.error(err);
        this.alertService.sendAlert('Error encountered when posting article.');
      });
  }

  clear(): void {
    this.form.reset();
    this.imageSrc = this.imagePlaceholderSrc;
    localStorage.removeItem('title');
    localStorage.removeItem('comments');
    localStorage.removeItem('imageSrc');
  }

  capture(): void {
    const title = this.form.get('title').value;
    const comments = this.form.get('comments').value;
    localStorage.setItem('title', title);
    localStorage.setItem('comments', comments);
    this.router.navigateByUrl('articles/capture');
  }

  isImageCaptured() {
    return this.imageSrc !== this.imagePlaceholderSrc;
  }

  imageDataUrlToFile(dataUrl: string): File {
    const split = dataUrl.split(',');
    const mime = split[0].match(/:(.*?);/)[1];
    const bstr = atob(split[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], 'placeholder', { type: mime });
    return file;
  }

  get imgClass(): string {
    if (this.isImageCaptured()) {
      return 'w-100 border border-dark';
    } else {
      return 'w-50 border border-dark';
    }
  }
}
