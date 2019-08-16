import {Injectable} from '@angular/core';
import {IUser} from '../models/user-interface';
import {USERS} from './users';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';


@Injectable({providedIn: 'root'})

export class ValidationService {
  users: IUser[] = USERS;
  user: IUser;


  constructor(private loginService: AuthService,
              private router: Router) {
  }

  validate(value) {
    // if (this.users.some(user => user.login === login && user.password === password)) {
      this.loginService.addUserToStorage(value);
      this.router.navigateByUrl('/votes');
    // } else {
    //   alert('no such user');
    // }
  }
}
