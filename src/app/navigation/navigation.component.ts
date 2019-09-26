import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  logoutClick() {
    this.authService.logout();
  }

  ngOnInit() {}
}
