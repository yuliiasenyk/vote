import {Injectable} from '@angular/core';
import { INITIAL_USERS_DATA, SECOND_USERS_DATA } from 'src/app/mock-data/users';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPagedUser, IUser, UserStatus} from '../models/user-interface';

@Injectable({providedIn: 'root'})

export class UsersService  {
  public userStatus = UserStatus;
  private behaviorSubject =  new BehaviorSubject<IPagedUser>(INITIAL_USERS_DATA);
  getUsersData(): Observable<IPagedUser> {
    return this.behaviorSubject.asObservable();
  }

  getPage(page) {
    if (page === undefined || page === 1) {
      this.behaviorSubject.next(INITIAL_USERS_DATA);
    } else {
      this.behaviorSubject.next(SECOND_USERS_DATA);
    }
  }

  changeUserStatus(status: UserStatus, user: IUser): void {
    user.status = status;
  }
  showStatistic(user: IUser): void {
    // TODO
  }
}
