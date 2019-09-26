import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUsersAndPaginationParams, IUser, UserStatus} from '../models/user-interface';
import {ApiService} from '../api.service';
const initData = {data: [], pageData: {page: 1, totalPages: 1}};
const initUser = {id: 6, username: 'a', description: 'a', status: UserStatus.blocked, isAdmin: false, permissions: 3, email: 'a', passwordHashed: 'a'};

@Injectable({providedIn: 'root'})

export class UsersService  {
  private behaviorSubjectGetUsers =  new BehaviorSubject<IUsersAndPaginationParams>(initData);
  public behaviorSubjectChangeStatus: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(initUser);
  public behaviorSubjectChangePermissions: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(initUser);
  public behaviorSubjectForHiddenStatisticAndModal = new BehaviorSubject<boolean>(false);

  constructor(private api: ApiService) {
    this.getPage(1);
  }

  getUsersData(): Observable<IUsersAndPaginationParams> {
    return this.behaviorSubjectGetUsers.asObservable();
  }

  getPage(page: number): void {
    this.api.get('/api/users/' + page)
      .subscribe((result: IUsersAndPaginationParams) => {
        if (result) {
          this.behaviorSubjectGetUsers.next(result);
        }
      });
  }

  changeUserPermissions(permission: number, user: IUser): Observable<IUser> {
   return this.api.put('/api/users/permissions/' + user.username, {newPermission: permission});
  }

  changeUserStatus(status: UserStatus, user: IUser): Observable<IUser> {
    return this.api.put('/api/users/status/' + user.username, {newStatus: status});
  }

  changePassword(oldPassword: string, newPassword: string, username: string): Observable<any> {
    return this.api.put('/api/users/password/' + username, {oldPass: oldPassword, newPass: newPassword});
  }

  fetchStatistic(user: IUser): Observable<any> {
    return this.api.get('/api/users/statistic/' + user.username);
  }

    participate(body): Observable<any> {
      return this.api.put('/api/users/onVote', body);
  }

}
