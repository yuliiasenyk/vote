import {IPage} from './page-interface';

export interface IUser {
  id: number;
  name: string;
  description: string;
  login: string;
  password: string;
  status: 'active' | 'blocked' | 'pending';
  isAdmin: boolean;
}
export interface IPagedUser {
  data: IUser[];
  pageData: IPage;
}
