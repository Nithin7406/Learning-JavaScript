// question1

let firstName1 = "kanaka";
let lastname = "raj";
let country = "india";
let city = "kolar";
let age = 23;
let isMarried = false;
console.log(typeof firstName1, typeof age, typeof isMarried);

//qtion2
let srt = "10";
let str2 = 10;
console.log(typeof srt === typeof str2);

//qtion3
console.log(parseInt("9.8") === 10);

//q4
console.log(10 > 9, !!1, 6 === 6);
console.log(!!+"$", !1, !!null);
let s1 = "python";
let s2 = "jargon";
console.log(s1.length != s2.length);

//q7
console.log(new Date().getFullYear());
console.log(new Date().getMonth() + 1);
console.log(new Date().getDay());

//q10
// let name1 = prompt("Enter name");

// name1.length > 7
//   ? console.log("ur name is big")
//   : console.log("ur name is short");

//q11
// let fname = prompt("Enter ur name");
// let lname = prompt("Enter Family");

// fname.length > lname.length
//   ? console.log(
//       `your first name, ${fname} is longer than your family name ,${lname} `
//     )
//   : console.log(
//       `your first name, ${fname} is shorter or same than your family name ,${lname} `
//     );

//q15
let yr = new Date().getFullYear();
let mth = new Date().getMonth() + 1;
let dt = new Date().getDate();
let hr = new Date().toLocaleTimeString();

console.log(`${yr}/${mth}/${dt} ${hr}`);

let city1 = "kgf";
switch (city1) {
  case "kolar":
    console.log("city is kolar");
    break;
  case "kgf1":
    console.log("kgf is city");
    break;
  default:
    console.log("eldorado");
}
