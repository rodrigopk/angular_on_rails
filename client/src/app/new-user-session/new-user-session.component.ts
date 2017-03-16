import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user-session',
  templateUrl: './new-user-session.component.html',
  styleUrls: ['./new-user-session.component.css'],
  providers: [UserService]
})
export class NewUserSessionComponent implements OnInit {

  model = new User('', '', '');

  constructor(private userService: UserService) { }

  ngOnInit() {    
  }

  signIn() {
    this.userService.signIn(
      this.model.email,
      this.model.password
    );
  }

}
