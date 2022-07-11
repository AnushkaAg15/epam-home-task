import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[];
  selectedUser?:User;


  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.users=this.userService.getUsers();
  }
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}

