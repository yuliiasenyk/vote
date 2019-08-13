import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {}

  loginForm = new FormGroup({
        login: new FormControl(''),
        password: new FormControl(''),
    });

  onSubmit() {
    alert('tgsrg');
  }
  ngOnInit() {}
}
