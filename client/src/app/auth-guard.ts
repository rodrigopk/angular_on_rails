import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private _tokenService: Angular2TokenService,
    private router: Router) {

  }

  canActivate():Promise<boolean>{
     return new Promise((resolve) => {

          resolve(true);
        //or
          resolve(false);

    });
  }
}