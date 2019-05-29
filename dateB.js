// let toDay = new Date(); // Todays date
// document.getElementById("demo").innerHTML = toDay; // Todays date displayed on the screen

let weekday = new Array(7); // 7 things inside

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//////

function myDateCalc() {
  let days = [];
  //  let startDate = new Date();   Using today as start date
  let startDate = document.getElementById("startDate").value;
  let myDate = document.getElementById("date").value; //Users input
  let endDate = new Date(myDate); // Formating the date for java script
  startDate = new Date(startDate);

  while (startDate <= endDate) {
    let weekDayName = weekday[startDate.getDay()];
    startDate.setDate(startDate.getDate() + 1); //this is taking date and extracts only the day number
    days.push(startDate);
    //  days.push(weekDayName);
    console.log(weekDayName);
  }
  console.log(days.length);
  document.getElementById("calc").innerHTML = "Days til then: " + days.length; // This needs to be inside the function
}

function buisnessCalc() {
  let days = [];
  //let startDate = new Date();   Using today as start date
  let startDate = document.getElementById("startDate").value;
  let myDate = document.getElementById("date").value; //Users input
  let endDate = new Date(myDate);
  startDate = new Date(startDate);

  while (startDate <= endDate) {
    let weekDayName = weekday[startDate.getDay()]; //startDate.getDay gives a number 0-6
    startDate.setDate(startDate.getDate() + 1); //this is taking date and extracts only the day number

    if (weekDayName != "Saturday" && weekDayName != "Sunday") {
      days.push(weekDayName);
    }
  }
  console.log(days.length);
  document.getElementById("buisness").innerHTML =
    "Buisnessdays til then " + days.length; // This needs to be inside the function
}
/////////////////////Real time counter///////


// Update the count down every 1 second
let x = setInterval(function() {
  // Todays date and time in milliseconds
  let now = new Date();

//Milliseconds till the day we are counting down to
  let countdownMyDate = document.getElementById("date").value; //Users input
  let countdownEndate = new Date(countdownMyDate); // Formating the date for java script

  // Milliseconds from countDown date till now
  let distance = countdownEndate - now;
  //When you do mathmatics on dates it will return it in milliseconds.

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(countdownEndate>0){
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  // When the date has already been count down
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); // Update the count down every 1 second
