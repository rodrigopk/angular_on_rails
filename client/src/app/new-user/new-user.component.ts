import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      registerAccountPath: '/api/auth'
    });
   }

  ngOnInit() {
  }

  register() {
    this._tokenService.registerAccount({
      email:                'example@example.org',
      password:             'secretPassword',
      passwordConfirmation: 'secretPassword'
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

}
