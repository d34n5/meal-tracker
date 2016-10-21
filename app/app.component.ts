import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>MMMMeal Tracker</h1>
    <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showDetails($event)"
      ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Breakfast Burrito", "Extra Cilantro & Pico", 700),
      new Meal("Rainbows & Glitter", "Too much party, Not enough sleep", 5),
      new Meal("Lorem Ipsum Sandwich", "From the Psuedo-content Cart", 420),
      new Meal("BBQ Coder", "Strangely, he didn't put up a fight", 868)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal.setCalorieColor();
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
