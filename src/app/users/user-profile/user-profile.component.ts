import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser, UserStatus, IUserStat} from '../../models/user-interface';
import {UsersService} from 'src/app/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser: IUser;
  @Output() openChangePassword = new EventEmitter();
  public userStatus = UserStatus;
  public openStats: boolean;
  public participatedVotesNumber: number;
  public userResults: IUserStat[];
  public statuses = [this.userStatus.active, this.userStatus.blocked, this.userStatus.pending];

  constructor(private usersService: UsersService) {
    this.usersService.behaviorSubjectForHiddenStatisticAndModal.subscribe(hidden => {this.openStats = hidden} );
    this.usersService.behaviorSubjectChangeStatus.subscribe(user => this.currentUser = user);
    this.usersService.behaviorSubjectChangePermissions.subscribe(user => this.currentUser = user);
  }

  ngOnInit() {}

  changeStatusClicked(value, user): void {
    this.usersService.changeUserStatus(value, user)
      .subscribe((result: IUser) => {
        if (result) {
          this.usersService.behaviorSubjectChangeStatus.next(result);
        }
      });
  }

  changePasswordClicked() {
    this.openChangePassword.emit();
  }

  showStatsClicked(): void {
    this.usersService.fetchStatistic(this.currentUser)
      .subscribe((result) => {
        this.participatedVotesNumber = result.length;
        this.userResults = [];
        for (const pair of result ) {
          this.userResults.push({question: Object.keys(pair).join(), choice: Object.values(pair).join()});
        }
      });
    this.openStats = !this.openStats;
  }

}
