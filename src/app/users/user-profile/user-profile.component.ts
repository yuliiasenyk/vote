import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user-interface';
import { UsersService } from 'src/app/users/users.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser: IUser;
  public blockActivateButton: string;
  public openStats: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.blockActivateButton = 'change Status';
    this.openStats = false;
  }

  changeStatusClicked(): void {
    this.usersService.changeUserStatus(this.currentUser.status);
  }

  changePasswordClicked(): void {
    // TODO
  }
  showStatsClicked(): void {
    this.usersService.showStatistic(this.currentUser);
    this.openStats = !this.openStats;
  }

}
