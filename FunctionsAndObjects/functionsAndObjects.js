// 1  Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly.

const getFullName = (firstname, lastname) => {
  return firstname + " " + lastname;
};

let showFullName = getFullName("John", "Doe");
console.log(showFullName);

// Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.
const calculateRectangleArea = (length, width) => {
  return length * width;
};

let areaResult = calculateRectangleArea(2, 4);
console.log(areaResult);

// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
const calculateDistance = (speed, minutes) => {
  return speed % minutes;
};

let distanceResult = calculateDistance(100, 60);
console.log("You have travelled " + distanceResult + " km");

// 4 Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previous functions are attached to the object. Adjust your code so that you can call the functions and test that they still work.
const calculator = {
  owner: "Asta",
  getFullName: function (firstname, lastname) {
    return firstname + " " + lastname;
  },
  calculateRectanleArea: function (length, width) {
    return length * width;
  },
  calculateDistance: function (speed, minutes) {
    return speed % minutes;
  },
};

console.log(calculator.getFullName("Asta", "Carl"));
console.log(calculator.calculateRectanleArea(10, 5));
console.log(calculator.calculateDistance(100, 60));
