// const person = {
//   name: "kanaka",
// };

// let a = [2, 3, 4];
// console.log(a[0]);

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: () => {
    console.log(this);
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// console.log(Object.entries(person));

// console.log(person.getFullName());

// // accessing values using .
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.location); // undefined

// // value can be accessed using square bracket and key name
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["age"]);
// console.log(person["location"]); // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person["phone number"]);

// console.log(this);

// let key = Object.keys(person);
// for (let i = 0; i < key.length; i++) {
//   console.log(key[i]);
//   console.log(person[key[i]]);
// }

// const perform = function (opration, i1, i2) {
//   return opration(i1, i2);
// };

// let add = function (i1, i2) {
//   return i1 + i2;
// };

// console.log(perform(add, 2, 3));

// debugger;
let a;
// console.log("before timeout");
// setTimeout(() => {
//   a = [];
// });
// console.log(a.length);

// Promise
// // debugger;
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     debugger;
//     a = [];
//     if (a.length === 1) {
//       reject("array is empty");
//     }
//     resolve(a);
//   }, 2000);
// });

// doPromise
//   .then((result) => {
//     debugger;
//     console.log(a.length);
//   })
//   .catch((error) => {
//     debugger;
//     console.log(error);
//   });

const url = "https://restcountries.com/v2/all"; // countries api
// fetch(url)
//   .then((response) => response.json()) // accessing the API data as JSON
//   .then((data) => {
//     // getting the data
//     console.log(data);
//   })
//   .catch((error) => console.error(error)); // handling error if something wrong happens

// const square = async function (n) {
//   return n * n;
// };
// const value = await square(2);
// console.log(value);

const fetchData = async () => {
  debugger;
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
