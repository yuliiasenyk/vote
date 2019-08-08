import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user-interface';
import { users } from 'src/app/mockes-data/users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  myUsers: IUser[] = users;

  constructor() { }

  ngOnInit() {
  }

}
