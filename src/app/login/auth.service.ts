import { Injectable } from '@angular/core';
import {IUser} from '../models/user-interface';
import {Observable, of} from 'rxjs';
import {USERS} from '../mock-data/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public removeUserFromStorage() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public addUserToStorage(userInfo: IUser) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public login(login: string, password: string): Observable<IUser> {
    const successfulLoginUser = USERS[0];
    const failureLogin = null;
    const LOGIN_SUCCESSFUL = true;
    if (LOGIN_SUCCESSFUL) {
      this.addUserToStorage(successfulLoginUser);
      return of<IUser>(successfulLoginUser);
    } else {
      try {
        throw new Error ('No user');
      } catch (e) {
        return of(failureLogin);
      }
    }
  }

  public logout() {
    this.removeUserFromStorage();
  }

}
