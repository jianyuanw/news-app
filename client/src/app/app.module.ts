import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AlertComponent } from './alert/alert.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { AuthGuard } from './auth/auth.guard';
import { WebcamModule } from 'ngx-webcam';
import { WebcamComponent } from './webcam/webcam.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'articles/view', component: ArticleListComponent },
  { path: 'articles/post', component: PostArticleComponent, canActivate: [AuthGuard] },
  { path: 'articles/capture', component: WebcamComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ArticleListComponent,
    AlertComponent,
    PostArticleComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
