import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { OrderService } from './order.service';
import {Product} from "../product";

describe('OrderService', () => {
  let service: OrderService;
  const userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['getActiveUser']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:UserService,
          userValue:userServiceSpy
        }
      ]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an order correctly', ()=>{
    //Arrange
    const product:Product={
      id:'product',
      name:'product',
      cost:100
    }

    //Act
    const order=service.createOrder(product);
     
    //Assert
    expect(order.product.id).toEqual('product');
  })
});
