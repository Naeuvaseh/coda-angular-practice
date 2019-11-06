import { Component, OnInit } from '@angular/core';
import { Order, Pizza, Side } from '../models';

@Component({
  selector: 'coda-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order = this.initOrder();

  constructor() { }

  ngOnInit() {
  }

  addPizza(pizza: Pizza) {

  }

  addSide(side: Side){

  }

  removePizza(pizza: Pizza) {

  }

  removeSide(side: Side){

  }

  private initOrder(): Order {
    return {
      pizza: [],
      sides: [],
      tax: 0,
      total: 0
    } as Order;
  }

}