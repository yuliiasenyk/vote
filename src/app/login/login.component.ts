import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder, AbstractControl} from '@angular/forms';
import { ValidationService } from 'src/app/mockes-data/validation.service';
import {AuthService} from './auth.service';
import {IUser} from '../models/user-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private validation: ValidationService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password:  new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.login(this.login.value, this.password.value)
        .subscribe(
          (user: IUser) => {
            console.log(user);
            this.router.navigateByUrl('/votes');
          },
          (error: Error) => console.log('ERROR', error),
        );
    }
  }
}
