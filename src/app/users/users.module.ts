import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UsersComponent} from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {ParticipantComponent} from './participant/participant.component';
import {ModalPasswordComponent} from './user-profile/modal-password/modal-password.component';
import { ModalDirective } from './user-profile/modal-password/modal.directive';
import { SharedModule } from '../share/shared.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: UsersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    UserProfileComponent,
    UsersComponent,
    UsersListComponent,
    ParticipantComponent,
    ModalPasswordComponent,
    ModalDirective,
  ],
  exports: [
    UserProfileComponent,
    UsersComponent,
    UsersListComponent,
    ParticipantComponent,
    ModalPasswordComponent,
    ModalDirective,
    RouterModule,
  ],
  entryComponents: [ ModalPasswordComponent ],
})
export class UsersModule {}
