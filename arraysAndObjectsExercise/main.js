// 1
let student = {
  name: "John",
  id: 123,
  grades: [4, 7, 2, 10],
};
console.log(student);

// 2
const addGrade = (student, grade) => {
  student.grades.push(grade);
};
addGrade(student, 12);
console.log("updated grades", student);

// 3

const changeStudentName = (student, newName) => {
  student.name = newName;
};
changeStudentName(student, "Jane");
console.log("updated student name", student);

// 4
addGrade(student, 12);
addGrade(student, 10);
addGrade(student, 7);
changeStudentName(student, "Caroline");
console.log("updated student name and grades", student);
