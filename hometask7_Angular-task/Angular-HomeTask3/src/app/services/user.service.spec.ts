import { TestBed } from '@angular/core/testing';
import {User} from '../user'
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should set the active user correctly', ()=>{
    //Arrange
    const user: User ={
      id:'test',
      name:'test'
    };

    //Act
    service.setActiveUser(user);

    //Assert
    expect(service['activeUser'].id).toEqual('test');
    expect(service['activeUser'].name).toEqual('test');
  });

  it('should get the active user correctly', ()=>{
    //Arrange
    service['activeUser']={
      id:'test',
      name:'test'
    };

    //Act
    const user = service.getActiveUser();

    //Assert
    expect(user.id).toEqual('test');
    expect(user.name).toEqual('test');
  })
});
