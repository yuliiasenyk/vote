import { Component, OnInit} from '@angular/core';
import {LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {
  };

  title = 'voting-src';

  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      // this.router.navigateByUrl('/votes');
    }
  }
}
