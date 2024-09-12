// 1 Create a Cat class with name, color, breed.
export class Cat {
  // 2 Create a constructor that takes 3 parameters to create an object with name, color, breed.
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  // 3 Create a function/method that returns the cat's data.
  getCatInfo() {
    return this.name + " " + this.color + " " + this.breed;
  }
}
