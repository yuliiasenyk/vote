import {Injectable} from '@angular/core';
import { INITIAL_USERS_DATA } from 'src/app/mockes-data/users';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedUser } from '../models/user-interface';

@Injectable({providedIn: 'root'})

export class UsersService  {
  private behaviorSubject =  new BehaviorSubject<IPagedUser>(INITIAL_USERS_DATA);
  getUsersData(): Observable<IPagedUser> {
    return this.behaviorSubject.asObservable();
  }
}
