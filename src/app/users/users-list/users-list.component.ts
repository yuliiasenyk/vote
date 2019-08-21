import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {IUser} from '../../models/user-interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() userSelected = new EventEmitter<IUser>();
  @Input() currentUser: IUser;

  constructor() { }

  ngOnInit() {}

  rowClicked(user: IUser): void {
    this.userSelected.emit(user);
  }
}
