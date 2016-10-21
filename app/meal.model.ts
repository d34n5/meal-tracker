export class Meal {
  public priceColor: string;
  constructor(public name: string, public details: string, public calorie: number) {
    this.setCalorieColor();
  }


  setCalorieColor() {
    if (this.calorie < 300) {
      this.calorieColor = "green"
    } else if (this.calorie >= 300 && this.calorie <= 600){
      this.calorieColor = "orange"
    } else {
      this.calorieColor = "red"
    }
  }

}
