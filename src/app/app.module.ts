import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { ToppingComponent } from './order/components/topping/topping.component';
import { PizzaComponent } from './order/containers/pizza/pizza.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OrderComponent, ToppingComponent, PizzaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
