import { Injectable } from '@angular/core';
import {IUser} from '../models/user-interface';
import {Observable, of} from 'rxjs';
import {ApiService} from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json',  });
  public options = { headers: this.headers, responseType: 'text' };

  constructor(private api: ApiService,     private router: Router) { }


  public isLoggedIn() {
    return sessionStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public removeUserFromStorage() {
    sessionStorage.removeItem('ACCESS_TOKEN');
  }

  public addUserToStorage(userInfo: IUser) {
    sessionStorage.setItem('ACCESS_TOKEN', JSON.stringify(userInfo));
  }

  public login(login: string, password: string): Observable<any> {
    const body = {l: login, p: password};
    return this.api.post('/api/auth/auth', body);
  }

  public registerNewUser(username: string, email: string, password: string): Observable<any> {
    const body = {un: username, e: email, p: password};
    return this.api.post('/api/auth/newUser', body);
  }

  public logout() {
    this.removeUserFromStorage();
  }

}
