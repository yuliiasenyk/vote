import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import {IUser} from '../../models/user-interface';
import {IVote} from '../../models/vote-interface';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() userSelected = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit() {
  }
  rowClicked(user: IUser): void {
    this.userSelected.emit(user);
  }
}
