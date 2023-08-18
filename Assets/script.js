var now = dayjs().format('MMM D, YYYY');
var currentDay = document.getElementById('currentDay');
var hour = dayjs().format('HH');
var textArea1= document.getElementById('textAreaOne');
var textArea2= document.getElementById('textAreaTwo');
var textArea3= document.getElementById('textAreaThree');
var textArea4= document.getElementById('textAreaFour');
var textArea5= document.getElementById('textAreaFive');
var textArea6= document.getElementById('textAreaSix');
var textArea7= document.getElementById('textAreaSeven');
var textArea8= document.getElementById('textAreaEight');
var textArea9= document.getElementById('textAreaNine');


$("#currentDay").html(now);

//clear local storage each day

/*send current date to local storage
use and if statement to check current date against local storage logged date
if the date is the same
console log something
if the date is different
clear local storage
then
send current date to local storage
*/
function getData(){
  textArea1.innerHTML = localStorage.getItem("textareaValueOne");
  textArea2.innerHTML = localStorage.getItem("textareaValueTwo");
  textArea3.innerHTML = localStorage.getItem("textareaValueThree");
  textArea4.innerHTML = localStorage.getItem("textareaValueFour");
  textArea5.innerHTML = localStorage.getItem("textareaValueFive");
  textArea6.innerHTML = localStorage.getItem("textareaValueSix");
  textArea7.innerHTML = localStorage.getItem("textareaValueSeven");
  textArea8.innerHTML = localStorage.getItem("textareaValueEight");
  textArea9.innerHTML = localStorage.getItem("textareaValueNine");
}


window.onload = function(){
  getData()
  var loggedDate = localStorage.getItem("loggeDate");
  localStorage.setItem("now", now);
  var checkNow= localStorage.getItem("now")
  console.log(loggedDate)
if( loggedDate = ""){
  localStorage.setItem("loggeDate", now)
    
if( loggedDate = checkNow){
    let task1 = localStorage.getItem('textareaValueOne');
    document.getElementById("textAreaOne").textContent= task1;
    console.log("now")
  }
return
}
if( loggedDate !== checkNow){
  console.log("nooo")
  //localStorage.clear();
}
};



$( "#fifthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaFive").value;
  localStorage.setItem("textareaValueFive", taskinput);
  let task = localStorage.getItem('textareaValueFive');
  document.getElementById("textAreaFive").value = task;
} );


//Updates the color of the time slot dependant on the current time of day

var nine= document.getElementById('hourNine').getAttribute('data-value');
  if(nine < hour){
    $("#hourNine").addClass("past");
  }
  if(nine == hour){
    $(".row time-block").addClass("present");
  }
  if(nine > hour){
    $(".row time-block").addClass("future");
  }

var ten= document.getElementById('hourTen').getAttribute('data-value');
  if(ten < hour){
    $("#hourTen").addClass("past");
  }
  if(ten == hour){
    $("#hourTen").addClass("present");
  }
  if(ten > hour){
    $("#hourTen").addClass("future");
  }

  var ele= document.getElementById('hourEleven').getAttribute('data-value');
  if(ele < hour){
    $("#hourEleven").addClass("past");
  }
  if(ele == hour){
    $("#hourEleven").addClass("present");
  }
  if(ele > hour){
    $("#hourEleven").addClass("future");
  }

  var twel= document.getElementById('hourTwelve').getAttribute('data-value');
  if(twel < hour){
    $("#hourTwelve").addClass("past");
  }
  if(twel == hour){
    $("#hourTwelve").addClass("present");
  }
  if(twel > hour){
    $("#hourTwelve").addClass("future");
  }

  var one= document.getElementById('hourOne').getAttribute('data-value');
  if(one < hour){
    $("#hourOne").addClass("past");
  }
  if(one == hour){
    $("#hourOne").addClass("present");
  }
  if(one > hour){
    $("#hourOne").addClass("future");
  }

  var two= document.getElementById('hourTwo').getAttribute('data-value');
  if(two < hour){
    $("#hourTwo").addClass("past");
  }
  if(two == hour){
    $("#hourTwo").addClass("present");
  }
  if(two > hour){
    $("#hourTwo").addClass("future");
  }
  
  var three= document.getElementById('hourThree').getAttribute('data-value');
  if(three < hour){
    $("#hourThree").addClass("past");
  }
  if(three == hour){
    $("#hourThree").addClass("present");
  }
  if(three > hour){
    $("#hourThree").addClass("future");
  }

  var four= document.getElementById('hourFour').getAttribute('data-value');
  if(four < hour){
    $("#hourFour").addClass("past");
  }
  if(four == hour){
    $("#hourFour").addClass("present");
  }
  if(four > hour){
    $("#hourFour").addClass("future");
  }

  var five= document.getElementById('hourFive').getAttribute('data-value');
  if(five < hour){
    $("#hourFive").addClass("past");
  }
  if(five == hour){
    $("#hourFive").addClass("present");
  }
  if(five > hour){
    $("#hourFive").addClass("future");
  }



//click events for each button to save the input to local storage and then input the value in the text area

$( "#firstButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaOne").value;
  localStorage.setItem("textareaValueOne", taskinput);
  let task = localStorage.getItem('textareaValueOne');
  document.getElementById("textAreaOne").value = task;
} );

$( "#secondButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaTwo").value;
  localStorage.setItem("textareaValueTwo", taskinput);
  let task = localStorage.getItem('textareaValueTwo');
  document.getElementById("textAreaTwo").value = task;
} );

$( "#thirdButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaThree").value;
  localStorage.setItem("textareaValueThree", taskinput);
  let task = localStorage.getItem('textareaValueThree');
  document.getElementById("textAreaThree").value = task;
} );

$( "#fourthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaFour").value;
  localStorage.setItem("textareaValueFour", taskinput);
  let task = localStorage.getItem('textareaValueFour');
  document.getElementById("textAreaFour").value = task;
} );

$( "#fifthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaFive").value;
  localStorage.setItem("textareaValueFive", taskinput);
  let task = localStorage.getItem('textareaValueFive');
  document.getElementById("textAreaFive").value = task;
} );


$( "#sixthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaSix").value;
  localStorage.setItem("textareaValueSix", taskinput);
  let task = localStorage.getItem('textareaValueSix');
  document.getElementById("textAreaSix").value = task;
} );

$( "#seventhButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaSeven").value;
  localStorage.setItem("textareaValueSeven", taskinput);
  let task = localStorage.getItem('textareaValueSeven');
  document.getElementById("textAreaSeven").value = task;
} );

$( "#eigthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaEight").value;
  localStorage.setItem("textareaValueEight", taskinput);
  let task = localStorage.getItem('textareaValueEight');
  document.getElementById("textAreaEight").value = task;
} );

$( "#ninthButton" ).on( "click", function() {
  var taskinput = document.getElementById("textAreaNine").value;
  localStorage.setItem("textareaValueNine", taskinput);
  let task = localStorage.getItem('textareaValueNine');
  document.getElementById("textAreaNine").value = task;
} );




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
