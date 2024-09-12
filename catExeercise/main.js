import { Cat } from "./Cat.js";

const cat1 = new Cat("Whiskers", "Orange", "Tabby");

console.log("cat;", cat1.getCatInfo());

// 4 Create a function that can change the cat's name.

const changeCatName = (cat, newName) => {
  cat.name = newName;
};
changeCatName(cat1, "Fluffy");

console.log("updated cat name;", cat1.getCatInfo());
