//String Literal
//---------------
// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// Halo nama saya John Doe, umur saya 33 tahun
// dan saya tinggal manado

// let kalimat5 =
//   "Halo nama saya " +
//   fullName +
//   ", umur saya " +
//   age +
//   " tahun dan saya tinggal di " +
//   address;

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;

// console.log(kalimat5);
// console.log(kalimat6);

//Arrow Function
//---------------

// function sayGreetings5() {
//   return `Hello World`;
// }
// console.log(sayGreetings5());

// const sayGreetings6 = (name) => {
//   return `Hello ${name}`;
// };

// console.log(sayGreetings6());

//Implicit return value
// const sayGreetings6 = (name) => `Hello ${name}`;

// //Pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1);
// //Pada Callback
// const numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default Parameter
//------------------

const sayGreetings5 = (fullName) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  console.log(`Hello ${fullName}`);
};

sayGreetings5();

const sayGreetings6 = (fullName = "John Doe") => {
  console.log(`Hello ${fullName}`);
};

sayGreetings6("Stenly");
