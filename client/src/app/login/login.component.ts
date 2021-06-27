import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { LoginResponse } from '../models';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError: boolean;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    });
    this.loginError = false;
  }

  login(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    console.log(`Submitting login form.\nUsername: ${username}\nPassword: ${password}`);
    const body = { username, password };
    this.http.post<LoginResponse>(`${SERVER_URL}/api/users/login`, body)
      .toPromise()
      .then((data: LoginResponse) => {
        console.log(`Message: ${data.message}\nUsername: ${data.username}\nToken: ${data.token}\nExpiresIn: ${data.expiresIn}`);
        const date = new Date();
        date.setSeconds(date.getSeconds() + data.expiresIn);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('expiresAt', date.valueOf().toString());
        this.loginError = false;
        this.router.navigateByUrl('');
        this.alertService.sendAlert('Login successful!');
      })
      .catch(err => {
        console.error(err);
        this.loginError = true;
      });
  }
}
