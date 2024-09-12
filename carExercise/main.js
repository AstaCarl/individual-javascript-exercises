import { Car } from "./Car.js";

// 5 Create Instances and Test Methods:
// Create two instances of the Car class with different make, model, and year values.
// Call the getCarInfo, start, and stop methods on these instances and print the results to verify that everything works as expected.
const car1 = new Car("Toyota", "Corolla", "2020");
console.log(car1.getCarInfo());
console.log(car1.start());
console.log(car1.getStatus());
console.log(car1.stop());
console.log(car1.getStatus());

const car2 = new Car("Mazda", "C5", "2016");
console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.getStatus());
console.log(car2.stop());
console.log(car2.getStatus());
