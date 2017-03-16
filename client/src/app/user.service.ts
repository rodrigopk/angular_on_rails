import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UserService {

  constructor(private _tokenService: Angular2TokenService,private router: Router) { 
    this._tokenService.init({
      registerAccountPath: '/api/auth',
      validateTokenPath: '/api/auth/validate_token',
      signInPath: '/api/auth/sign_in'
    });
  }

  signIn(_email,_password) {
    this._tokenService.signIn({
        email:    _email,
        password: _password
    }).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['']);
        },
        error =>    console.log(error)
    );
  }

  registerAccount(_email,_password,_confirmation) {
    this._tokenService.registerAccount({
      email:                _email,
      password:             _password,
      passwordConfirmation: _confirmation
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

}
