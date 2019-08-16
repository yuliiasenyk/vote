import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user-interface';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser: IUser;
  public blockActivateButton: string;
  public openStats: boolean;

  constructor() { }

  ngOnInit() {
    this.blockActivateButton = 'change Status';
    this.openStats = false;
  }


}
