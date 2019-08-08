import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user-interface';
import { users } from 'src/app/mockes-data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  myUsers: IUser[] = users;
  public isProfileViewable: boolean;
  constructor() {}
  ngOnInit() {
    this.isProfileViewable = false; }
    public toggleProfile(): void { this.isProfileViewable = !this.isProfileViewable;
  }
}

