import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {IUser} from '../models/user-interface';
import { USERS } from '../mockes-data/users';

@Injectable()

export class UsersService  {
  getUsersData(): Observable<IUser[]> {
    return of<IUser[]>(USERS);
  }
}
