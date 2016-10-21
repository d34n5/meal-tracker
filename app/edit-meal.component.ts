import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" id="editMeal">
      <h2>Edit Meal</h2>
      <div>
        <label>Edit Meal Name</label>
        <input [(ngModel)] = "childSelectedMeal.name">
      </div>
      <div>
        <label>Edit Meal Details</label>
        <input [(ngModel)] = "childSelectedMeal.details">
      </div>
      <div>
        <label>Edit Meal Calories:</label>
        <input [(ngModel)] = "childSelectedMeal.calorie">
      </div>
      <button (click)="doneClicked()">Submit Edit</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}
