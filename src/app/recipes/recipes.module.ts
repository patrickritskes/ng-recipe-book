import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { DropDownDirective } from '../shared/dropdown.directive';

import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        DropDownDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {
    
}