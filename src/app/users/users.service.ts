import {Injectable} from '@angular/core';
import {IUser} from '../models/user-interface';
import { USERS } from '../mockes-data/users';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedUser} from '../models/user-interface';
import {PAGE_DATA} from '../mockes-data/pages';

@Injectable()

export class UsersService  {
  getUsersData(): Observable<IPagedUser> {
    return new BehaviorSubject<IPagedUser>({
      pageData: PAGE_DATA,
      data: USERS,
    } );
  }
}
