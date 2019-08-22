import {Component, Input, OnInit} from '@angular/core';
import {IUser, UserStatus} from '../../models/user-interface';
import {UsersService} from 'src/app/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser: IUser;
  public userStatus = UserStatus;
  public openStats: boolean;
  public statuses = [this.userStatus.active, this.userStatus.blocked, this.userStatus.pending];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.openStats = false;
  }

  changeStatusClicked(value, user) {
    this.usersService.changeUserStatus(value, user);
  }

  changePasswordClicked(): void {
    // TODO
  }
  showStatsClicked(): void {
    this.usersService.showStatistic(this.currentUser);
    this.openStats = !this.openStats;
  }

}
