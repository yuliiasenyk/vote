import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user-interface';
import {UsersService} from '../users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  currentUser: IUser;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsersData().subscribe((users: IUser[]) => {
      this.users = users;
      if (Array.isArray(users) && users.length) {
        this.currentUser = users[3];
      }
    });
  }
  addNewUser() {
    console.log('addNewUser clicked');
  }
  userSelected(user: IUser): void {
    console.log(`details about ${user.name} are open`);
  }
}

