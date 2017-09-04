import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Spaghetti',
            'Spaghetti Napolitana',
            'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
            [
                new Ingredient(250, 'gram', 'Spahetti'),
                new Ingredient(5, 'pieces', 'Tomatoes'),
                new Ingredient(1, 'piece', 'Onion'),
                new Ingredient(3, 'toes', 'Garlic')
            ]
        ),
        new Recipe(
            'Tortellini',
            'Tortellini with Spinach',
            'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tortellini.jpg',
            [
                new Ingredient(250, 'gram', 'Tortellini'),
                new Ingredient(1, 'piece', 'Onion'),
                new Ingredient(3, 'toes', 'Garlic')
            ]
        ),
        new Recipe(
            'Olive Bread',
            'Olive Bread with olive oil',
            'https://c2.staticflickr.com/4/3184/2302819771_8c6006e638_z.jpg?zz=1',
            [
                new Ingredient(500, 'gram', 'Flower'),
                new Ingredient(250, 'ml', 'Water'),
                new Ingredient(7, 'gram', 'Yeast'),
                new Ingredient(100, 'gram', 'Olives')
            ]
        ),
        new Recipe(
            'Tomato Soup',
            'Tomato cream soup',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Potage_Cr%C3%A9cy_soup.jpg',
            [
                new Ingredient(1000, 'ml', 'Bouillon'),
                new Ingredient(5, 'pieces', 'Tomatoes'),
                new Ingredient(1, 'piece', 'Onion'),
                new Ingredient(3, 'toes', 'Garlic')
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}