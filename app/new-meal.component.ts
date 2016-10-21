import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
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
    <button (click)="
      addClicked(newName.value, newDetails.value, newCalorie.value);
      newName.value='';
      newDetails.value='';
      newPrice.value='';
    ">Add New Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calorie: number)eal{
    var newMealToAdd: Meal = new Meal(name, details, calorie);
    this.newSender.emit(newMealToAdd);
  }
}
