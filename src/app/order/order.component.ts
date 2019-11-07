import { Component, OnInit } from '@angular/core';
import { Order, Pizza, Sides } from '../models';

@Component({
  selector: 'coda-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // TODO #1: Create a few default pizzas to start
  order = this.initOrder();

  constructor() {
    // TODO: In /order, create "components" and "container" directories.
    // TODO: In /container, create a new component called 'pizza'.
    // TODO: In /component, create a new component called 'topping'
    // TODO #3: Create a new interface called 'Topping' with name, price, and id as properties.
    // TODO #4: Update the Pizza interface to allow an array of Toppings.
    // TODO: Implement methods below
  }

  ngOnInit() { }

  addPizza(pizza: Pizza) {
    this.order.pizza.push(pizza);
  }

  addSide(side: Sides){
    this.order.sides.push(side);
   }

  removePizza(pizza: Pizza) { }

  removeSide(side: Sides) { }

  private initOrder(): Order {
    return {
      pizza: [{
        id: 1,
        name: 'TJ'
      }],
      sides: [],
      tax: 0,
      total: 0
    } as Order;
  }

}