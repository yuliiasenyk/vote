import { IUser } from '../models/user-interface';
import {IPagedUser} from '../models/user-interface';
import {PAGE_DATA} from './pages';

export const USERS: IUser[] = [
  {
    id: 1,
    name: 'George',
    description: 'some description',
    login: 'admin',
    password: 'password',
    status: 'active',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Ivan',
    description: 'some description',
    login: 'Ivan',
    status: 'pending',
    password: 'password',
    isAdmin: false,
  },
  {
    id: 3,
    name: 'Kate',
    description: 'some description',
    login: 'Kate',
    password: 'password',
    status: 'blocked',
    isAdmin: false,
  },
  {
    id: 4,
    name: 'Diana',
    description: 'some description',
    login: 'Diana',
    password: 'password',
    status: 'active',
    isAdmin: false,
  },
  {
    id: 5,
    name: 'Evo',
    description: 'some description',
    login: 'Evo',
    status: 'active',
    password: 'password',
    isAdmin: false,
  },
];
export const INITIAL_USERS_DATA: IPagedUser = {
  data: USERS,
  pageData: PAGE_DATA,
};
