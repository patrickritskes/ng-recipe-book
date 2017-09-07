# RecipeBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Live Demo

You can watch a live [demo](http://www.prosynthorproductions.com/recipe-book) </br>
Register yourself or login if you already registered first, and have fun :)!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Git tips and trics

Local changes in wrong branch (checkout -> choose other branch in Visual Studio Code with left bottom menu):

```
git stash
git checkout otherBranch 
git stash pop
```
Remove all local refs that are merged except develop (powershell):
```
git branch --merged | ?{-not ($_ -like '*develop')} | %{git branch -d $_.trim()}
```

Remove all refs to remote branches (prefixe with origin) that don't exists anymore (You have to sync changes or restart VSC to see this directly or maybe wait sometime):
```
git fetch --prune
```

Merge 'develop' branch into the 'master' branch
```
(on branch develop)git merge master
(resolve any merge conflicts if there are any)
git checkout master
git merge development (there won't be any conflicts now)
```