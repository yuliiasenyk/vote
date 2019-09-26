import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import {IUser} from '../../models/user-interface';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnChanges {

@Input() users: IUser[];
@Output() userSelected = new EventEmitter<IUser>();
@Input() currentUser: IUser;

  constructor(private usersService: UsersService) {
    this.usersService.behaviorSubjectChangeStatus.subscribe(v => console.log(v.status, 'new status'));
  }

  ngOnInit() {}

  ngOnChanges() {
    this.usersService.behaviorSubjectChangePermissions.subscribe();
  }

  rowClicked(user: IUser): void {
    if (user !== this.currentUser) {
      this.usersService.behaviorSubjectForHiddenStatisticAndModal.next(false);
      this.userSelected.emit(user);
    }
  }
  changePermissionsClicked(value, user) {
    this.usersService.changeUserPermissions(value, user)
      .subscribe((result: IUser) => {
        if (result) {
          this.usersService.behaviorSubjectChangePermissions.next(result);
        }
      });
  }
}
