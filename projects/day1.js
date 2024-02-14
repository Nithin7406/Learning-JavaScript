const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log("button clicked");
});

//

// const clickMe = (event) => {
//   debugger;
//   alert("We can attach event on HTML element");
// };

const input = document.querySelector("input");
input.addEventListener("blur", (e) => {
  //   console.log(e.target);
  console.log(e.target.value);
});

document.addEventListener("keypress", (e) => {
  console.log(e.key);
});
