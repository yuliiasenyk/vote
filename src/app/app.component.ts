import { Component, OnInit} from '@angular/core';
import {UsersService } from 'src/app/users/users.service';
import {AuthService} from 'src/app/login/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loginService: AuthService, private router: Router) {
  };

  title = 'voting-src';

  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      // this.router.navigateByUrl('/votes');
    }
  }
}
