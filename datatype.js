// let age = 35;
// const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
// let mass = 72; // mass in Kilogram
// // const PI = 3.14; // pi a geometrical constant

// // More Examples
// const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
// const bodyTemp = 37; // oC average human body temperature, which is a constant

// console.log(age, gravity, mass, boilingPoint, bodyTemp);

const PI = Math.PI;

// console.log(PI); // 3.141592653589793
// console.log(Math.round(3.69));
// console.log(Math.floor(3.3)); // 4 rounding up
// console.log(Math.max(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

// let randNum = Math.random();
// console.log(randNum, "randNum form math.random");

// let x10 = randNum * 6;
// console.log(x10, "aft 10mul");

// let floor1 = Math.ceil(x10);
// console.log(floor1, "aft floor");

// let a = 2;
// let b = 3;
// console.log(`${a} + ${b}=${a + b}`); // injecting the data dynamically

// let string = "30 Days Of JavaScript";
// console.log(string.charAt(0)); // 3

// let lastIndex = string.length - 2;
// console.log(string.charAt(lastIndex)); // t

let challenge = "30 Days Of JavaScript";
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.substr(4, 6));

console.log("1\t1\t 1\t 1\t 1");
console.log("2\t 1\t 2\t 4\t 8");
console.log("3\t 1\t 3\t 9\t 27");
console.log("4\t 1\t 4\t 16\t 64\n5\t 1\t 5\t 25\t 125");

let str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.match(/because/gi));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
    .replaceAll("%", "")
    .replaceAll("@", "")
    .replaceAll("&", "")
    .replaceAll("$", "")
    .replaceAll("#", "")
    .replaceAll("!", "")
    .replaceAll(";", "");
console.log(sentence);

console.log(0 == " ");

// alert("Welcome to 30DaysOfJavaScript");

// let number = prompt("Enter number", "number goes here");
// console.log(number);

// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree);

let height = prompt("Enter height", "height goes here");
let base = prompt("Enter base", "base goes here");

let heightinnum = parseInt(height);
let baseinnum = parseInt(base);
console.log(0.5 * heightinnum * baseinnum);
