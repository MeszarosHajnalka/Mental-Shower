import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from './util/jwtService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(): boolean {
    if (
      sessionStorage.getItem('currentUserToken') &&
      this.jwtService.isTokenAuthenticated()
    )
      return true;
    else {
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}
