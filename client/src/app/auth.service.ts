import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "./alert.service";
import { SERVER_URL } from "./constants";
import { LoginResponse } from "./models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string = '';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private http: HttpClient
  ) {}

  login(username: string, password: string): boolean {
    const body = { username, password };
    let success = false;
    this.http.post<LoginResponse>(`${SERVER_URL}/api/users/login`, body).toPromise()
      .then((data: LoginResponse) => {
        localStorage.clear();
        const date = new Date();
        date.setSeconds(date.getSeconds() + data.expiresIn);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('expiresAt', date.valueOf().toString());
        this.router.navigateByUrl(this.redirectUrl);
        this.alertService.sendAlert('Login successful!');
        success = true;
      })
      .catch(err => {
        console.error(err);
        success = false;
      });
    return success;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const expiresAt = parseInt(localStorage.getItem('expiresAt'));
    const now = new Date().valueOf();
    if (now < expiresAt) {
      return true;
    } else {
      return false;
    }
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('');
    this.alertService.sendAlert('Logout successful!');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  register(username: string, password: string): Promise<any> {
    const body = { username, password };
    return this.http.post<any>(`${SERVER_URL}/api/users/register`, body)
        .toPromise();
  }
}