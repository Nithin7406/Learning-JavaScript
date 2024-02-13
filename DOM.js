// const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles); //HTMLCollections
// console.log(allTitles.length); // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]); // prints each elements in the HTMLCollection
// }

// console.log(document.getElementsByClassName("maha"));
// console.log(document.getElementById("dumma"));
// console.log(document.querySelector(".maha"));

// let input = document.getElementById("input1");
// input.setAttribute("disabled", true);

// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`;
// const ul = document.querySelector("ul");
// ul.innerHTML = lists;

// ul.innerHTML = "";

// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px";
//   if (i % 2 === 0) {
//     title.style.color = "green";
//   } else {
//     title.style.color = "red";
//   }
// });

//color
function getRandomColor() {
  let color = "#";
  const letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let indx = Math.floor(Math.random() * 16);
    color += letters[indx];
  }
  return color;
}
setInterval(() => {
  const year2020 = document.getElementById("2020");
  year2020.style.color = getRandomColor();
}, 150);

//time and date
function updateDateTime() {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const amPM = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  const dateTimeString = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${amPM}`;
  const fulldata = (document.getElementById("liveDateTime").innerText =
    dateTimeString);
}
updateDateTime();

setInterval(updateDateTime, 1000);
setInterval(() => {
  const fulldate = document.getElementById("liveDateTime");
  fulldate.style.backgroundColor = getRandomColor();
}, 1000);
