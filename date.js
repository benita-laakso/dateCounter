let toDay = new Date();// Todays date
document.getElementById("demo").innerHTML = toDay;// Todays date displayed on the screen

// function userDate() {
//   let end = document.getElementById('date').value; // The date that the user is giving
//   let endDate = new Date(end);
//
//   console.log(endDate);
// }
let weekday = new Array(7);// 7 things inside

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//////

function myDateCalc(){
let days= [];
let startDate = new Date();
let myDate = document.getElementById('date').value; //Users input
let endDate = new Date(myDate);

while (startDate <= endDate) {

let weekDayName= weekday[startDate.getDay()];
  startDate.setDate(startDate.getDate() +1); //this is taking date and extracts only the day number
  days.push(startDate);
//  days.push(weekDayName);
console.log(weekDayName);
}
console.log(days.length);
document.getElementById('calc').innerHTML ="Days til then: " + days.length;// This needs to be inside the function
}


// if(weekday<5){
//   days.push(weekDayName)
// }


//console.log(givenDate.getDate);
