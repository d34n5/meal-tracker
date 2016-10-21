import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
  <div class="col-sm-6" id="newMeal">
    <h2>New Meal</h2>
    <div>
      <label>Enter Meal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calorie Count:</label>
      <input #newCalorie>
      <br>
      <button (click)="
        addClicked(newName.value, newDetails.value, newCalorie.value);
        newName.value='';
        newDetails.value='';
        newCalorie.value='';
      ">Add New Meal</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calorie: number){
    var newMealToAdd: Meal = new Meal(name, details, calorie);
    this.newMealSender.emit(newMealToAdd);
  }
}
