// 1 Create a class named Car.
export class Car {
  // 2 Add a constructor that accepts make, model, and year as parameters and initializes these properties.
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  // 3 getCarInfo method: This method should return a string containing the car's make, model, and year.
  getCarInfo() {
    return this.make + " " + this.model + " " + this.year + " ";
  }

  // 4 start method: This method should set isRunning to true and return the string "The car has started".
  start() {
    this.isRunning = true;
    return "The car has started";
  }

  // 5 stop method: This method should set isRunning to false and return the string "The car has stopped".
  stop() {
    this.isRunning = false;
    return "The car has stopped";
  }

  getStatus() {
    return "isRunning = " + this.isRunning;
  }
}
