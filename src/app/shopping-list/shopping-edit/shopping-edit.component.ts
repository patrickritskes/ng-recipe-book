import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('prefixInput') prefixInputRef: ElementRef; 
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientPrefix = this.prefixInputRef.nativeElement.value;
    const ingredientName = this.nameInputRef.nativeElement.value;    
    const newIngredient = new Ingredient(ingredientAmount, ingredientPrefix, ingredientName);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
