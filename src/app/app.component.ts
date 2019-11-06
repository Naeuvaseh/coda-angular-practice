import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  /* 

  Create a resuable component that can be used to generate a list of pizza toppings. Don't forget to include:
    - Topping name
    - Price
    - ID
    - (Additional properties)
 
  TODO:
    #1: Generate a new "order" component (within /app) that will be the container component for our pizza toppings. Add it to the AppComponent html markup under the title.
    
    #2: Inside /app, create an "enums" and "modles" folder.

    #3: Inside /models, export an interface called Pizza with name, id, and price properties.

    #4: Inside /models, export an interface called Sides with name, id, and price properties. 

    #5: Inside /models, export an interface called Order with pizza, sides, tax, and total   
        properties.

    #6: Inside the Order component, create methods called addPizza, removePizza, addSide, 
        removeSide with appropriate parameters and types.    
 
 */  
}
