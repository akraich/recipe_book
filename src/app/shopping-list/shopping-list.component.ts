import { Component } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 10),
    new Ingredient("Oranges", 8),
    new Ingredient("Bananas", 2),
  ];

  constructor() {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
