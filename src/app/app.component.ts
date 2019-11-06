import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // Create a resuable component that can be used to generate a list of pizza toppings. Don't forget to include:
  //   - Topping name
  //   - Price
  //   - ID
  //   - Additional properties
}
