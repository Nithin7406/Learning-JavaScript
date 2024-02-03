//q1
// let age2 = prompt("Enter ur age");
// if (age2 >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log(`ur left with ${18 - age2} year to drive`);
// }

// let age1 = prompt("enter ur age");
// let nav = 18 - age1;
// if (age1 >= 18) {
//   console.log("You are old enough to drive");
// } else if (nav) {
//   console.log("Ur left with " + nav + " years to drive");
// }

//q2
// let myage = prompt("Enter my age");
// let urage = prompt("Enter ur age");

// let ma = myage - urage; //-2
// let ua = urage - myage; //2

// if (myage === urage) {
//   console.log("both same");
// } else if (myage > urage) {
//   console.log(`I'm ${ma} year older then u`);
// } else {
//   console.log(`your ${ua} year older then me`);
// }

// if (myage > urage) {
//   console.log(`I'm ${ma}year older then u`);
// } else {
//   console.log(`your ${ua}year older then me`);
// }

//q4
// let a = prompt("enter the value of a");
// let b = prompt("enter the value of b");

// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} is less than ${b}`);
// }

// {
//   a > b
//     ? console.log(`${a} is greater than ${b}`)
//     : console.log(`${a} is less than ${b}`);
// }

// let score = prompt("Enter the marks");

// if (score >= 80 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 89) {
//   console.log("B");
// } else if (score >= 60 && score <= 69) {
//   console.log("C");
// } else if (score >= 50 && score <= 59) {
//   console.log("D");
// } else if (score >= 0 && score <= 49) {
//   console.log("F");
// } else {
//   console.log("Invalid marks");
// }

//q5
// let season = prompt("Enter the Month");

// switch (season) {
//   case September:
//   case October:
//   case November:
//     console.log("weather is Autumn");
//     break;
//   case December:
//   case January:
//   case February:
//     console.log("weather is Winter");
//     break;
//   case March:
//   case April:
//   case May:
//     console.log("weather is Spring");
//     break;
//   case June:
//   case July:
//   case August:
//     console.log("weather is Summer");
//     break;
//   default:
//     console.log("Enter valid month");
// }

// let season = prompt("Enter the Month");

// if (season === "September" || season === "October" || season === "November") {
//   console.log("weather is Autumn");
// } else if (
//   season === "December" ||
//   season === "January" ||
//   season === "February"
// ) {
//   console.log("weather is Winter");
// } else if (season === "March" || season === "April" || season === "May") {
//   console.log("weather is Spring");
// } else if (season === "June" || season === "July" || season === "August") {
//   console.log("weather is Summer");
// } else {
//   console.log("Invalid month");
// }

//q6

// let weeks = prompt("Enter the day");
// let week = weeks.toLowerCase();

// if (
//   week === "monday" ||
//   week === "tuesday" ||
//   week === "wednesday" ||
//   week === "thersday" ||
//   week === "friday"
// ) {
//   console.log(`what day is today? - ${week}\n ${week} is wroking day`);
// } else if (week === "satursday" || week === "sunday") {
//   console.log(`what day is today? - ${week}\n${week} is weekend`);
// } else {
//   console.log("invalid day");
// }

//q7
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("even=" + i);
//   }
// }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log("odd=" + i);
//   }
// }

let Months = prompt("Enter the day");
let month = Months.toLowerCase();

switch (month) {
  case "january":
    console.log(`Enter a month: ${month}\n${month} has 31 days.`);
    break;
  case "fabruary":
    console.log(`Enter a month: ${month}\n${month} has 28 days.`);
    break;
  case "march":
    console.log(`Enter a month: ${month}\n${month} has 31 days.`);
    break;
  case "april":
    console.log(`Enter a month: ${month}\n${month} has 30 days.`);
    break;
  case "may":
    console.log(`Enter a month: ${month}\n${month} has 31 days.`);
    break;
  case "june":
    console.log(`Enter a month: ${month}\n${month} has 30 days.`);
    break;
  case "july":
    console.log(`Enter a month: ${month}\n${month} has 31 days.`);
    break;
  default:
    console.log("Enter the valid month");
}
