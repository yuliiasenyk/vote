import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/mockes-data/validation.service';
import {AuthService} from './auth.service';
import {IUser} from '../models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  loginForm: FormGroup;
  login: FormControl;
  password: FormControl;

  constructor(
    private validation: ValidationService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.login = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.login,
      password: this.password,
    });
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.isSubmitted = true;
      this.validation.validate(this.loginForm.value);

      this.authService.login('', '')
        .subscribe(
          (user: IUser) => {
            console.log(user);
          },
          (error: Error) => console.log('ERROR', error),
        );
    }
  }
}
