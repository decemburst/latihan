// import hello, {
//   fullName,
//   angka,
//   john,
//   greetings as ucapkanSalam,
// } from "./utils.js";

// console.log(fullName);
// console.log(angka);
// console.log(john);
// ucapkanSalam();
// hello();

//Asynchronous JS

//Synchronous
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// Async terdiri dari 2:
// 1. Parallel
// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 3000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// console.log("Proses 4");
// 2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise fulfilled
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// 1. then - catch
// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// 2. Async - Await
const consumePromise = async () => {
  let result = await newPromise;
  console.log(result);
};
consumePromise();
