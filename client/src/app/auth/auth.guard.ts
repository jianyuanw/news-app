import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('In AuthGuard | canActivate');
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      console.log(`redirectUrl = ${state.url}`)
      this.router.navigateByUrl('/login');
      this.alertService.sendAlert('Please login first');
      return false;
    }
  }
}
