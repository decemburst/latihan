//Array
// let students = ["john", "bob", "peter"];
// let numbers = [1, 2, 3, 4, 5];
// let john = ["john", "doe", 35, true];

// console.log(students);
// console.log(numbers);
// console.log(john);
// console.log(john.length);

// //Array Index
// console.log(students[1]);
// students[1] = "jane";
// console.log(students);

// console.log(students[students.length - 1]);

// //ToString
// console.log(john.toString());
// //Join
// console.log(john.join(" "));
// console.log(john.join("#"));
// //Pop
// john.pop();
// console.log(john);
// //push
// john.push("Good morning");
// console.log(john);
// //shift
// john.shift();
// console.log(john);
// //unshift
// john.unshift("Hello");
// console.log(john);
// //splice
// john.splice(3, 0, true);
// console.log(john);
// //slice
// let john2 = john.slice(2);
// console.log(john2);
// //concat
// let combineArray = john.concat(numbers, john2);
// console.log(combineArray);

//Object

// const john = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   grade: [90, 80, 100],
//   address: {
//     city: "Manado",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//   },
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
// };

// //Dot notation
// // console.log(john.firstName);
// // console.log(john.grade[2]);
// // console.log(john.address.city);
// // console.log(john.sayGreetings());

// //Bracket notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// john.job = "Teacher";

//Array Object
let students = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Petter",
  },
  {
    id: 3,
    name: "Jack",
  },
];

// students.forEach(function (item) {
//   console.log(item.name);
// });

// let output = students.map(function (item) {
//   return item.name;
// });

// let output = students.filter(function (item) {
//   return item.name === "Petter";
// });

let output = students.find(function (item) {
  return item.name === "Petter";
});

console.log(output);
