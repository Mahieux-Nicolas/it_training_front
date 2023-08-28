import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardienAuth implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    console.log(this.authService.verifyToken());
    if (this.authService.verifyToken()) {
      return true;
    } else {
      // Redirect to the login page
      return this.router.parseUrl('/user/connexion');
    }
  }
}