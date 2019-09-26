import { Type } from '@angular/core';
import {IUser} from '../../../models/user-interface';

export class ModalItem {
  constructor(public component: Type<any>, public user: IUser) {}
}
