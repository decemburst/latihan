let fullName = "John Doe";

let numbers = [1, 2, 3, 4, 5];

let john = {
  fullName: "John Doe",
  age: 30,
  address: "Manado",
};
function greetings() {
  console.log("Hello World");
}

function helloWorld() {
  console.log("Hello Export Default");
}

export { fullName, numbers as angka, john, greetings };
export default helloWorld;
