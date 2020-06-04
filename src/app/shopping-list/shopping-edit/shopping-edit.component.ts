import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("inputName", { static: false }) inputNameRef: ElementRef;
  @ViewChild("inputAmount", { static: false }) amountNameRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  onItemAdded() {
    const intName: string = this.inputNameRef.nativeElement.value;
    const intAmount: number = this.amountNameRef.nativeElement.value;
    const ingredient = new Ingredient(intName, intAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
