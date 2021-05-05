import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  constructor(private jwtHelper: JwtHelperService) {}

  public getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      //TODO: Handle error
      return null;
    }
  }

  public isTokenAuthenticated() {
    const token = sessionStorage.getItem('currentUserToken');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
