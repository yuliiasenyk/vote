import {IPage} from './page-interface';
import {IUser} from './user-interface';

/* Admin - only one, able to do everything
  permissions
1 - admin and active users with ability to create votes
2 - active users able to vote
3 - blocked and pending */

export enum UserStatus {
  active = 'active',
  blocked = 'blocked',
  pending = 'pending',
}

export interface IUser {
  id: number;
  username: string;
  description: string;
  email: string;
  passwordHashed: string;
  status: UserStatus;
  isAdmin: boolean;
  permissions: number;
  statistic?: [object];
}

export interface IUsersAndPaginationParams {
  data: IUser[];
  pageData: IPage;
}

export interface IUserStat {
  question: string;
  choice: string;
}

export interface IModalPassword {
  currentUser: IUser;
}


