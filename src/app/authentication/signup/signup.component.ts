import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {AuthService} from '../auth.service';
import {IUser} from '../../models/user-interface';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
    this.createForm();
    this.errorMessage = '';
  }

  createForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password:  new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  get username(): AbstractControl {
    return this.signupForm.get('username');
  }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  onSignupSubmit() {
    if (this.signupForm.invalid) {
      return;
    } else {
      this.authService.registerNewUser(this.username.value, this.email.value, this.password.value)
        .subscribe(result => {
          console.log('SIGNUP RESULT', result);
          if (result.error) {
            this.errorMessage = result.error;
          } else {
              this.authService.addUserToStorage(result);
              this.router.navigateByUrl('/votes');
              return of<IUser>(result);
            }
          }
        );
    }
  }

}
