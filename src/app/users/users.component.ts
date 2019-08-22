import { Component, OnInit, OnDestroy} from '@angular/core';
import { IUser, IPagedUser} from 'src/app/models/user-interface';
import {UsersService} from './users.service';
import {IPage} from '../models/page-interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: IUser[];
  currentUser: IUser;
  pageOfUsers: IPage;
  public dataSubscription: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.dataSubscription = this.usersService.getUsersData().subscribe((pagedUser: IPagedUser) => {
      this.users = pagedUser.data;
      this.pageOfUsers = pagedUser.pageData;
      if (Array.isArray(this.users) && this.users.length) {
        this.currentUser = this.users[0];
      }
    });
  }

  addNewUserClicked() {}

  userSelected(user: IUser): void {
    this.currentUser = user;
  }

  pageSelected(page: number): void {
    if (page !== this.pageOfUsers.page) {
      this.usersService.getPage(page);
    }
  }
  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}

