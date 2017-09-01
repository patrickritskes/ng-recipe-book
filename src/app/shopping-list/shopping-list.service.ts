import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient(5, 'pieces', 'apples'),
        new Ingredient(10, 'pieces', 'tomatoes')
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        /*for (let ingredient of this.ingredients) {
            this.addIngredient(ingredient);
        }*/
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}