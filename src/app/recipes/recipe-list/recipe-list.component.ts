import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'; // import recipe object model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  // an array of recipe objects from the recipe ts file - you must import the recipe object model to the component
recipes: Recipe[] = [
  new Recipe("Tomhawk BBQ Recipe", "BBQ a perfect tomhawk ribeye steak.", "https://bushcooking.com/wp-content/uploads/2021/12/Grilled-Tomahawk-Ribeye-Steak-3a-368x368.jpg"),
  new Recipe("BBQ Steak", "Steak a la BBQ", "https://bushcooking.com/wp-content/uploads/2021/12/Grilled-Tomahawk-Ribeye-Steak-3a-368x368.jpg")
];

constructor(){

}


}
