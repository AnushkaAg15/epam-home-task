import {User} from './user';
import { Product } from './product';

export interface Order{
    id:string;
    user:User;
    product: Product;
}
