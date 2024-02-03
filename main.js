import { countries } from "./countries.js";

import { webTechs } from "./web_techs.js";

//q1
console.log(countries);
console.log(webTechs);
//q2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let replace = text.replaceAll(",", "").replaceAll(".", "");
console.log(replace);
let wrd = replace.split(" ");
console.log(wrd);
console.log(wrd.length);
//q3

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// let meatindx = shoppingCart.indexOf("Meat");
// if (meatindx === -1) {
//   shoppingCart.unshift("Meat");
// }
// meatindx = shoppingCart.indexOf("Sugar");
// if (meatindx === -1) {
//   shoppingCart.push("Sugar");
// }
// console.log(shoppingCart);

// let honeyindx = shoppingCart.indexOf("Honey");
// const honey = shoppingCart.slice(honeyindx);
// console.log(honey);
// let indxtea = shoppingCart.indexOf("Tea");
// // shoppingCart.splice(indxtea, 1, "Green tea");
// shoppingCart[indxtea] = "green tea";
// console.log(shoppingCart);

//q
