import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerError: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]]
    });
  }

  register(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.authService.register(username, password)
      .then(data => {
        console.log(data);
        this.registerError = false;
        this.router.navigateByUrl('');
        this.alertService.sendAlert('Registration successful! You may now login.');
      })
      .catch(err => {
        console.error(err);
        console.log('register fail');
        this.registerError = true;
      });
  }
}
