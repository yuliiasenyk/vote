import { Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = 'Vote';

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
    }
  }
}
