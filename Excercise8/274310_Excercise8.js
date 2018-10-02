function getDateTime() {
  var today = new Date();
  var weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  console.log("Today is " + weekday[today.getDay()]);

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = hour >= 12 ? " PM " : " AM ";
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Noon";
    } else {
      hour = 12;
      prepand = " PM";
    }
  }
  if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Midnight";
    } else {
      hour = 12;
      prepand = " AM";
    }
  }
  console.log(
    "Current Time : " + hour + prepand + " : " + minute + " : " + second
  );

  document.getElementById("time").innerHTML =
    '<span style="color:blue">' +
    "Today is : " +
    weekday[today.getDay()] +
    ", " +
    "Current time is : " +
    hour +
    prepand +
    " : " +
    minute +
    " : " +
    second +
    "</span>";
}

function printWin() {
  window.print();
}

function printDate() {
  var todayfmt1 = new Date();
  var todayfmt2 = new Date();
  var todayfmt3 = new Date();
  todayfmt1 =
    parseInt(todayfmt1.getMonth() + 1) +
    "/" +
    todayfmt1.getDate() +
    "/" +
    todayfmt1.getFullYear();
  todayfmt2 =
    parseInt(todayfmt2.getMonth() + 1) +
    "-" +
    todayfmt2.getDate() +
    "-" +
    todayfmt2.getFullYear();
  todayfmt3 =
    parseInt(todayfmt3.getDate() + 1) +
    "/" +
    todayfmt3.getMonth() +
    "/" +
    todayfmt3.getFullYear();
  document.getElementById("pDate").innerHTML =
    "<br />" + todayfmt1 + "<br />" + todayfmt2 + "<br />" + todayfmt3;
}

function randNumberGuess() {
  var randTxt = prompt("Guess a Number between 1 to 10");
  var num = parseInt(randTxt);
  if (num < 10) {
    if (num === Math.floor(Math.random() * 10 + 1)) {
      alert("Good Work");
      
    } else {
      alert("Better Luck Next Time");
    }
    console.log(Math.floor(Math.random() * 10 + 1));
  } else {
    alert("Please Enter number between 1 to 10");
  }

};

function getURL()
{
    console.log(document.URL + "\n");
};

function multiply()
{
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;

  var no1 = parseInt(numb1);
  var no2 = parseInt(numb2);

  document.getElementById("MultiDivRes").innerHTML =  "<br />" + "<p>The Result of Multiply is : " + (no1 * no2) + "</p>";
};

function divide()
{
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;

  var no1 = parseInt(numb1);
  var no2 = parseInt(numb2);

  if(no1 > no2)
  {
  document.getElementById("MultiDivRes").innerHTML =  "<br />" + "The Result of Divide is [Num1/Num2] : " + (no1 / no2);
  }
  else
  {
    document.getElementById("MultiDivRes").innerHTML =  "<br />" + "The Result of Divide is [Num2/Num1] : " + (no2 / no1);
  }
};

function convertCase(str) {
  var lower = String(str).toLowerCase();
  document.getElementById("casecnvtres").innerHTML =  lower.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
};