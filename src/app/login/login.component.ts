import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/mockes-data/validation.service';
import {AuthService} from './auth.service';
import {IUser} from '../models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(
              private formBuilder: FormBuilder,
              private validation: ValidationService,
              private authService: AuthService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
     this.isSubmitted = true;
     this.validation.validate(this.loginForm.value);

     this.authService.login('', '')
        .subscribe(
          (user: IUser) => { console.log(user); },
          (error: Error) => console.log('ERROR', error),
        );
    }
  }
}
