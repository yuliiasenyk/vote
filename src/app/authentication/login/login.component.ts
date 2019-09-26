import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {IUser} from '../../models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
    this.errorMessage = '';
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
        .subscribe(result => {
         console.log('LOGIN RESULT', result);
         if (result.error) {
            this.errorMessage = result.error;
         } else {
            this.authService.addUserToStorage(result);
            this.router.navigateByUrl('/votes');
            return of<IUser>(result);
          }
        });
    }
  }
}


