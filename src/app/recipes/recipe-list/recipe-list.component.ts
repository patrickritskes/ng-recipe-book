import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Spaghetti Napolitana', 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG'),
    new Recipe('Tortellini', 'Tortellini with Spinach', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tortellini.jpg'),
    new Recipe('Olive Bread', 'Olive Bread with olive oil', 'https://c2.staticflickr.com/4/3184/2302819771_8c6006e638_z.jpg?zz=1'),
    new Recipe('Tomato Soup', 'Tomato cream soup', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Potage_Cr%C3%A9cy_soup.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
