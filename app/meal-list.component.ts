import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onCalorieChange($event.target.value)">
      <option value="all" selected="selected">Show All Meals</option>
      <option value="low">Show Low Calorie Meals</option>
      <option value="high">Show High Calorie Meals </option>
    </select>
    <div *ngFor ="let currentMeal of childMealList | sortCalorie:calorieRange">
      <div class ="mealDiv">
        <p>
          <h3> Name:  {{ currentMeal.name }} </h3>
          <br>
          <h4> Details:  {{ currentMeal.details}}</h4>
          <h3> Calorie Count: {{ currentMeal.calorie }}</h3>
        </p>
      </div>
    </div>
    `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public calorieRange: string = "all";

  onCalorieChange(optionFromMenu){
    this.calorieRange = optionFromMenu;
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit)
  }
}
