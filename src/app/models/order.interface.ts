import { Pizza } from './pizza.interface';
import { Sides } from './sides.interface';

export interface Order {
  pizza?: Pizza[];
  sides?: Sides[];
  tax: number;
  total: number;
}