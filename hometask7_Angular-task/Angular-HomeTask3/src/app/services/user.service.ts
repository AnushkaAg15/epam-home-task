import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private activeUser:User;

  constructor() { }
  getActiveUser(){
    return this.activeUser as Readonly<User>;
  }

  setActiveUser(user:User){
    this.activeUser=user;
  }
}
