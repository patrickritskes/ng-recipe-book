import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  @ViewChild('f') addIngredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {   
    const formValue = form.value;     
    const newIngredient = new Ingredient(formValue.amount, formValue.prefix, formValue.name);
    this.shoppingListService.addIngredient(newIngredient);
    this.addIngredientForm.reset();
  }

}
