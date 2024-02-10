// function vowels(str) {
//   let count = 0;
//   for (const check of str) {
//     if (
//       check === "a" ||
//       check === "e" ||
//       check === "i" ||
//       check === "o" ||
//       check === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// //

// let a = [0925498712694786, 12376493749, 872938749123];
// a.forEach((b) => {
//   console.log(b + b);
// });

//
let a = [90, 96, 80, 92, 88, 86];
let newarr = a.filter((val) => {
  return val >= 90;
});
console.log(newarr);

let n = prompt("enter the number");
let ar = [];
for (let a = 1; a <= n; a++) {
  ar[a - 1] = a;
}
console.log(ar);

let sum = ar.reduce((i, j) => {
  return i + j;
});
console.log(sum);

let mul = ar.reduce((i, j) => {
  return i * j;
});
console.log(mul);

const arr = [
  { id: 1, name: "naveen" },
  { id: 2, name: "nithin" },
];
