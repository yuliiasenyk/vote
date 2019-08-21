import {Injectable} from '@angular/core';
import { INITIAL_USERS_DATA, SECOND_USERS_DATA } from 'src/app/mockes-data/users';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedUser, IUser} from '../models/user-interface';

@Injectable({providedIn: 'root'})

export class UsersService  {
  private behaviorSubject =  new BehaviorSubject<IPagedUser>(INITIAL_USERS_DATA);
  getUsersData(): Observable<IPagedUser> {
    return this.behaviorSubject.asObservable();
  }

  getAnotherPage(page) {
    if (page === undefined || page === 1) {
      this.behaviorSubject.next(INITIAL_USERS_DATA);
    } else {
      this.behaviorSubject.next(SECOND_USERS_DATA);
    }
  }

  changeUserStatus(status: string): void {
    status === 'active' ?  status = 'blocked' :  status = 'active';
  }

  showStatistic(user: IUser): void {
    // TODO
  }
}
