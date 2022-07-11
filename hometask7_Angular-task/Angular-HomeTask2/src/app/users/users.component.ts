import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  selectedUser?:User;

  deleted=false;

  constructor(private userService:UsersService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getUsers();
    this.route.queryParams.subscribe(params => {
      if(params['deleted']==="true")
      this.deleted=true;
    });
  }
    getUsers(): void{
      this.users=this.userService.getUsers();
    }
    
    onSelect(user: User): void {
      this.selectedUser = user;
      user.isDeleted=(user.isDeleted)?false:true;
    }
  }
  
  


