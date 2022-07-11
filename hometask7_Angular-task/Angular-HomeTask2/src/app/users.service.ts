import { Injectable } from '@angular/core';
import {User} from './user';
import {USERS} from './mock-users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): User[]{
    return USERS;
  }
  constructor() { }
}
