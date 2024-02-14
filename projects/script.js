function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

///
const container = document.getElementById("container");

const N = 100;

const numRows = Math.ceil(N / 5);
for (let i = 0; i < numRows; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 1; j <= 5; j++) {
    const number = i * 5 + j;
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

const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((item) => {
    item.forEach((country) => {
      const name = country.name;
      console.log(name);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
