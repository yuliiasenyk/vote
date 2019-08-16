import {IPage} from './page-interface';
import {IUser} from './user-interface';

export interface IUser {
  id: number;
  name: string;
  description: string;
  login: string;
  password?: string;
  status: string;
  isAdmin: boolean;
}

export interface IPagedUser {
  data: IUser[];
  pageData: IPage;
}
