import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../../users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser, IModalPassword} from '../../../models/user-interface';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.scss']
})
export class ModalPasswordComponent implements OnInit, IModalPassword  {
  @Input() currentUser: IUser;
  changePasswordForm: FormGroup;
  public successMessage: string;
  public errorMessage: string;
  public formOpen: boolean;
  public modalOpened: boolean;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.modalOpened = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.formOpen = true;
    this.changePasswordForm = new FormGroup({
      oldPassword:  new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      newPassword:  new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  closeModal(evt: MouseEvent) {
    evt.stopPropagation();
    this.modalOpened = false;
  }

  onPasswordChangeSubmit(oldPassword, newPassword, user) {
    console.log(user.username, newPassword, 'user and new password in onPasswordChangeSubmit');
    this.changePasswordForm.reset();
    this.userService.changePassword(oldPassword, newPassword, user.username)
      .subscribe(result => {
        if (result.error) {
          this.errorMessage = 'Wrong password';
        } else {
          this.successMessage = 'Password was successfully changes';
          this.formOpen = false;
        }
      });
  }

  onOverlayClicked(evt: MouseEvent) {
    this.modalOpened = false;
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

}

