const d = new Date();

const months = [
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.getElementById("months").innerHTML = months[d.getMonth()];
document.getElementById("week").innerHTML = days[d.getDay()];
document.getElementById("day").innerHTML = d.getDate();
document.getElementById("years").innerHTML = d.getFullYear();
