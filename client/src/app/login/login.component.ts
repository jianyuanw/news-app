import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../models';

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
    private alertService: AlertService,
    private authService: AuthService
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
    // console.log(`Submitting login form.\nUsername: ${username}\nPassword: ${password}`);
    const success = this.authService.login(username, password);
    this.loginError = success ? false : true;
  }
}
