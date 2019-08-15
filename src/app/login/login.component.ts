import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import {IUser} from '../models/user-interface';
import {USERS} from '../mockes-data/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: IUser[] = USERS;
  user: IUser;
  isSubmitted = false;
  loginForm: FormGroup;
  constructor(
    private loginService: LoginService, private router: Router, private formBuilder: FormBuilder ) {}

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  onLoginSubmit() {
    if (this.users.some(user => user.login === this.loginForm.value.login && user.password === this.loginForm.value.password)) {
      this.isSubmitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.loginService.login(this.loginForm.value);
      this.router.navigateByUrl('/votes');
    } else {
      alert('no such user');
    }
  }
}
