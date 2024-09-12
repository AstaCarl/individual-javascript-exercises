// 1 Create an array with 5 names. Print out the first element (name) using console.log()
let names = ["John", "Jane", "Jack", "Jill"];
console.log(names);
console.log(names[0]);

// 2 Use the indexOf function to get the index of a name that exists in your array.

let index = names.indexOf("Jack");
console.log(index);

// 3 Try the indexOf function with a name that does not exist. What is returned?
let index2 = names.indexOf("Jonas");
console.log(index2);

// 4 Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.

names.push("Jacob");
console.log("updated names array", names);

// 5 Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
let names2 = names.slice(0, 3);
console.log("sliced names array", names2);

// 6 Create 2 objects with firstname, lastname, email – values. Add the two objects to a new array. 'log' the array to verify. Also 'log' the first objects' email in a separate 'log'.
let person1 = {
  firstname: "Morten",
  lastname: "Mikkelsen",
  email: "morten@email.com",
};

let person2 = {
  firstname: "Asta",
  lastname: "Carl",
  email: "asta@email.com",
};

let personData = [person1, person2];
console.log("person data array", personData);
console.log(
  "Names only;",
  personData[1].firstname,
  personData[1].lastname,
  personData[0].firstname,
  personData[0].lastname
);

console.log("Emails only;", personData[1].email, personData[0].email);
