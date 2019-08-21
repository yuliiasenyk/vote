import { Component, OnInit } from '@angular/core';
import { IUser, IPagedUser} from 'src/app/models/user-interface';
import {UsersService} from './users.service';
import {IPage} from '../models/page-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  currentUser: IUser;
  pageOfUsers: IPage;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsersData().subscribe((pagedUser: IPagedUser) => {
      this.users = pagedUser.data;
      this.pageOfUsers = pagedUser.pageData;
      if (Array.isArray(this.users) && this.users.length) {
        this.currentUser = this.users[0];
      }
    });
  }

  addNewUser() {}

  userSelected(user: IUser): void {
    this.currentUser = user;
  }

  pageSelected(page: number): void {
    if (page !== this.pageOfUsers.page) {
      this.usersService.getAnotherPage(page);
    }
  }
}

