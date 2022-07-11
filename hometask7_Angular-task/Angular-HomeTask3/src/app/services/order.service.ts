import { Injectable } from '@angular/core';
import {Order} from '../order';
import {Product} from '../product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly userService: UserService) { }

  createOrder(product:Product):Order{
    return {
      id:Date.now().toString(),
      user:this.userService.getActiveUser(),
      product
    };
  }
}
