import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "sortCalorie",
  pure: false
})

export class SortCaloriePipe implements PipeTransform {
  transform (input: Meal[], calorieRange) {
    var output: Meal[] = [];
    if(calorieRange === "low"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie < 500) {
          output.push(input[i]);
        }
      }  return output;
    } else if (calorieRange === "high"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie >= 500) {
          output.push(input[i]);
        }
      } return output;
    } else {
      return input;
    }
  }
}
