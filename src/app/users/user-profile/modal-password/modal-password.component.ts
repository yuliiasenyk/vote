import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.scss']
})
export class ModalPasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      newPassword:  new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  get newPassword(): AbstractControl {
    return this.changePasswordForm.get('newPassword');
  }

  onPasswordChangeSubmit() {
console.log(this.newPassword.value);
  }

  closeModal(modal) {

  }
}

