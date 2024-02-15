// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }

// ///
// const container = document.getElementById("container");

// const input = document.querySelector("input");
// input.addEventListener("blur", () => {
//   const N = 100;

//   const numRows = Math.ceil(N / 10);
//   for (let i = 0; i < numRows; i++) {
//     const row = document.createElement("div");
//     row.classList.add("row");

//     for (let j = 1; j <= 10; j++) {
//       const number = i * 10 + j;
//       if (number > N) break;
//       const div = document.createElement("div");
//       div.textContent = number;
//       div.classList.add("number");

//       div.style.display = "inline-block";
//       div.style.width = "50px";
//       div.style.height = "50px";
//       div.style.textAlign = "center";
//       div.style.lineHeight = "50px";
//       div.style.margin = "2px";

//       if (number % 2 === 0) {
//         div.style.backgroundColor = "lightgreen";
//       } else {
//         div.style.backgroundColor = "yellow";
//       }

//       if (isPrime(number)) {
//         div.style.backgroundColor = "red";
//       }

//       row.appendChild(div);
//     }

//     container.appendChild(row);
//   }
// });

const container = document.getElementById("container");
const input = document.querySelector("input");

input.addEventListener("blur", () => {
  // Get the value entered in the input field
  const inputValue = parseInt(input.value, 10);

  // Check if the entered value is valid (a positive integer)
  if (Number.isInteger(inputValue) && inputValue > 0) {
    // Clear the container before generating new numbers
    container.innerHTML = "";

    const N = inputValue;

    const numRows = Math.ceil(N / 10);
    for (let i = 0; i < numRows; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 1; j <= 10; j++) {
        const number = i * 10 + j;
        if (number > N) break;
        const div = document.createElement("div");
        div.textContent = number;
        div.classList.add("number");

        div.style.display = "inline-block";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.textAlign = "center";
        div.style.lineHeight = "50px";
        div.style.margin = "2px";

        if (number % 2 === 0) {
          div.style.backgroundColor = "lightgreen";
        } else {
          div.style.backgroundColor = "yellow";
        }

        if (isPrime(number)) {
          div.style.backgroundColor = "red";
        }

        row.appendChild(div);
      }

      container.appendChild(row);
    }
  } else {
    // If the entered value is not valid, display an error message or handle it accordingly
    console.log("Please enter a valid positive integer.");
  }
});

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
