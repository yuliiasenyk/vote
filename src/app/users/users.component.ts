import { Component, OnInit } from '@angular/core';
import { IUser, IPagedUser} from 'src/app/models/user-interface';
import {UsersService} from '../users/users.service';
import {IPage} from '../models/page-interface';
import {IPagedVote} from '../models/vote-interface';


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

  addNewUser() {
    console.log('addNewUser clicked');
  }
  userSelected(user: IUser): void {
    this.currentUser = user;
    console.log(`details about ${user.name} are open`);
  }
  pageSelected(page: number): void {
    console.log(`page ${page} is clicked`);
  }
}

