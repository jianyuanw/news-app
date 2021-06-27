import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expiresAt');
  }
}
