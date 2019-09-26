import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {IUser, IUsersAndPaginationParams, IModalPassword} from 'src/app/models/user-interface';
import {UsersService} from './users.service';
import {IPage} from '../models/page-interface';
import {Subscription} from 'rxjs';
import { ModalDirective } from './user-profile/modal-password/modal.directive';
import {ModalItem} from './user-profile/modal-password/modal-item';
import {ModalPasswordComponent} from './user-profile/modal-password/modal-password.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit, OnChanges, OnDestroy {
  users: IUser[];
  currentUser: IUser;
  pageParams: IPage;
  public modal;
  public dataSubscription: Subscription;
  @ViewChild(ModalDirective, {static: false}) modalHost: ModalDirective;

  constructor(private usersService: UsersService, private resolver: ComponentFactoryResolver) {}

  ngOnChanges() {}

  ngOnInit() {
    this.modal = new ModalItem(ModalPasswordComponent, this.currentUser);
    this.dataSubscription = this.usersService.getUsersData().subscribe((pageWithUsers: IUsersAndPaginationParams) => {
      this.users = pageWithUsers.data;
      this.pageParams = pageWithUsers.pageData;
    });
  }

  loadPasswordModal() {
    const passwordModal = this.modal;
    const componentFactory = this.resolver.resolveComponentFactory(passwordModal.component);
    const viewContainerRef = this.modalHost.viewContainerRef;
    // viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as IModalPassword).currentUser = this.currentUser;
  }

  userSelected(user: IUser): void {
    this.currentUser = user;
  }

  openChangePassword() {
    this.loadPasswordModal();
  }

  pageSelected(page: number): void {
    this.currentUser = null;
    if (page !== this.pageParams.page) {
      this.usersService.getPage(page);
    }
  }
  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
