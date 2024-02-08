//q1
// for (a = 0; a <= 10; a++) {
//   console.log(a);
// }

// //q2
// for (a = 10; a >= 0; a--) {
//   console.log(a);
// }

//q3

// let n = 5;
// for (a = 1; a <= n; a++) {
//   console.log("hi");
// }

//q4
// const numberOfRows = 7;

// for (let i = 1; i <= numberOfRows; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "#";
//   }

//   console.log(row);
// }

//q5
// debugger;
// for (a = 0; a <= 10; a++) {
//   let b = a * a;
//   console.log(`${a}x${a} = ${b}`);
// }

// // //q6
// console.log("i\ti^2\ti^3\ti^4\n---------------");
// for (a = 0; a <= 10; a++) {
//   console.log(`${a} ${a ** 2} ${a ** 3} ${a ** 4}`);
// }

// //q7
// for (let a = 0; a <= 100; a++) {
//   if (a % 2 !== 0) {
//     console.log(a);
//   }
// }

// //q
// const n = 10; // You can change the value of n as needed

// console.log("Odd Numbers:");

// for (let i = 1; i <= n; i += 2) {
//   console.log(i);
// }

//q16
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j].toUpperCase());
//   }
// }

// //q1
// const countries = ["USA", "Canada", "UK", "Australia"];

// const copiedCountries = countries.slice();

// console.log(copiedCountries);

//q2
const countries = ["USA", "Canada", "UK", "Australia"];

const copiedCountries = [...countries];

const sortedCountries = copiedCountries.sort();

console.log(sortedCountries);
