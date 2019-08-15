import {Injectable} from '@angular/core';
import { IUser } from 'src/app/models/user-interface';
import { USERS } from 'src/app/mockes-data/users';

@Injectable({
  providedIn: 'root'
})

export class LoginService  {
  users: IUser[] = USERS;
  user: IUser;

  public login(userInfo: IUser) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
