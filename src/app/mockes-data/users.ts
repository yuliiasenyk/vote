import { IUser } from '../models/user-interface';

export const users: IUser[] = [
  {id: 1, login: 'admin', password: 'password', isAdmin: true},
  {id: 2, login: 'user', password: 'password', isAdmin: false},
]
