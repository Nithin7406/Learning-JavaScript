// let com = ["microsoft", "uber", "google", "ibm", "netflix"];
// console.log(com);
// com.shift();
// console.log(com);
// com.splice(2, 1, "ola");
// console.log(com);
// com.push("amazon");
// console.log(com);

// const arr = Array();
// console.log(arr);

// const fruits = ["banana", "orange", "mango", "lemon"];
// let index = fruits.indexOf("mango"); // 0

// if (index === -1) {
//   console.log("This fruit does not exist in the array");
// } else {
//   console.log("This fruit does exist in the array");
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(0));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(9));

// const numbers2 = [1, 2, 3, 4, 5];
// numbers2.shift(2);
// console.log(numbers2);
// //
// const firstNums = [1, 2, 3];
// const secondNums = [1, 4, 9];

// const arrayOfArray = [firstNums, secondNums];
// console.log(arrayOfArray[1]);

//q1
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// //q2
// let arr = Array();
// console.log(arr);
// //q3
// let ar = [1, 2, 3, 4, 5];
// console.log(countries.length);
// //q4
// console.log(countries[0]);
// console.log(countries[6]);
// console.log(countries[10]);
// //q5
// let mixedDataTypes = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   1,
//   2,
//   3,
//   4,
//   5,
//   true,
//   { name: "nithin", name1: "kumar" },
//   { num: [1, 2, 3, 4] },
// ];
// console.log(mixedDataTypes);

//q6
let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//q7
// console.log(Companies);
// //q8
// console.log(Companies.length);
// //q9

// console.log(Companies[0]);

// let middleIndex = Math.floor(Companies.length / 2);
// let middleItem = Companies[middleIndex];

// console.log(middleItem);

// let comp = Companies.length - 1;
// let lastitem = Companies[comp];

// console.log(lastitem);

//q10//q11
// for (let com = 0; com < Companies.length; com++) {
//   let cmp = Companies[com].toUpperCase();
//   console.log(cmp);
// }
//q12
// const lastArrayString =
//   companies.slice(0, -1).join(", ") + " and " + companies[companies.length - 1];
// console.log(lastArrayString + " are big it companies");

//q13
// let ecom = prompt("Enter the companie").toUpperCase();
// const prst = companies.includes(ecom);
// if (prst === true) {
//   console.log(`${ecom} is a it companie`);
// } else {
//   console.log(`${ecom} is not a it companie`);
// }

//q14

// const filteredCompanies = [];

// for (let i = 0; i < companies.length; i++) {
//   let count = 0;

//   for (let j = 0; j < companies[i].length; j++) {
//     if (companies[i][j].toLowerCase() === "o") {
//       count++;
//     }
//   }
//   if (count >= 1) {
//     filteredCompanies.push(companies[i]);
//   }
// }

// console.log(filteredCompanies);

//q15
// companies.sort();
// console.log(companies);

// //q16
// companies.reverse();
// console.log(companies);

//q17
// console.log(companies.slice(0, 3));

// //q18
// console.log(companies.slice(-3));

// //q19
// let compp = Math.floor(companies.length / 2);
// console.log(companies[compp]);

// //q20
// companies.shift();
// console.log(companies);

//q21
// let middle = Math.floor(companies.length / 2);
// companies.splice(middle, 1);
// console.log(companies);

// //q22
// companies.pop();
// console.log(companies);

//q23
// companies = [];
// console.log(companies);
