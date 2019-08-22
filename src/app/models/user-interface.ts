import {IPage} from './page-interface';
import {IUser} from './user-interface';

export enum UserStatus {
  active = 'active',
  blocked = 'blocked',
  pending = 'pending',
}

export interface IUser {
  id: number;
  name: string;
  description: string;
  login: string;
  password?: string;
  status: UserStatus;
  isAdmin: boolean;
  permissions: boolean;
}

export interface IPagedUser {
  data: IUser[];
  pageData: IPage;
}
