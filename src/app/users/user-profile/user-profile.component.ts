import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user-interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser: IUser;
  constructor() { }

  ngOnInit() {}

  addNewUser(): void {
    console.log('new user will be added');
  }

}
