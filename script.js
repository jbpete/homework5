// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

var dayWeek = dayjs()
$('#currentDay').text(dayWeek.format('dddd, MMMM D YYYY, h:mm:ss a'));



var saveBtn = document.querySelectorAll('.btn');

// Grab input boxes
var typeBoxes1 = document.getElementById('input1')
var typeBoxes2 = document.getElementById('input2')
var typeBoxes3 = document.getElementById('input3')
var typeBoxes4 = document.getElementById('input4')
var typeBoxes5 = document.getElementById('input5')
var typeBoxes6 = document.getElementById('input6')
var typeBoxes7 = document.getElementById('input7')
var typeBoxes8 = document.getElementById('input8')
var typeBoxes9 = document.getElementById('input9')

//Set historical local storage to input boxes
document.getElementById("input1").innerHTML = localStorage.journal1;
document.getElementById("input2").innerHTML = localStorage.journal2;
document.getElementById("input3").innerHTML = localStorage.journal3;
document.getElementById("input4").innerHTML = localStorage.journal4;
document.getElementById("input5").innerHTML = localStorage.journal5;
document.getElementById("input6").innerHTML = localStorage.journal6;
document.getElementById("input7").innerHTML = localStorage.journal7;
document.getElementById("input8").innerHTML = localStorage.journal7;
document.getElementById("input9").innerHTML = localStorage.journal7;

//function to make save buttons work
for(var i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", function() {
    
    var activity1 = input1.value.trim();
    var activity2 = input2.value.trim();
    var activity3 = input3.value.trim();
    var activity4 = input4.value.trim();
    var activity5 = input5.value.trim();
    var activity6 = input6.value.trim();
    var activity7 = input7.value.trim();

    localStorage.setItem("journal1", activity1);
    localStorage.setItem("journal2", activity2);
    localStorage.setItem("journal3", activity3);
    localStorage.setItem("journal4", activity4);
    localStorage.setItem("journal5", activity5);
    localStorage.setItem("journal6", activity6);
    localStorage.setItem("journal7", activity7);
  });
}




var now = new Date();
var hours = now.getHours();

console.log(hours)
function changeColors() {

  if (hours >= 9 && hours < 10) {
    typeBoxes1.style.background = "red";
    typeBoxes2.style.background = "green";
    typeBoxes3.style.background = "green";
    typeBoxes4.style.background = "green";
    typeBoxes5.style.background = "green";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 10 && hours < 11){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "red";
    typeBoxes3.style.background = "green";
    typeBoxes4.style.background = "green";
    typeBoxes5.style.background = "green";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 11 && hours < 12){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "red";
    typeBoxes4.style.background = "green";
    typeBoxes5.style.background = "green";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 12 && hours < 13){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "red";
    typeBoxes5.style.background = "green";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 13 && hours < 14){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "grey";
    typeBoxes5.style.background = "red";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 14 && hours < 15){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "grey";
    typeBoxes5.style.background = "grey";
    typeBoxes6.style.background = "red";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 15 && hours < 16){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "grey";
    typeBoxes5.style.background = "grey";
    typeBoxes6.style.background = "grey";
    typeBoxes7.style.background = "red";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 16 && hours < 17){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "grey";
    typeBoxes5.style.background = "grey";
    typeBoxes6.style.background = "grey";
    typeBoxes7.style.background = "grey";
    typeBoxes8.style.background = "red";
    typeBoxes9.style.background = "green";
  }
  else if (hours >= 17 && hours < 18){
    typeBoxes1.style.background = "grey";
    typeBoxes2.style.background = "grey";
    typeBoxes3.style.background = "grey";
    typeBoxes4.style.background = "grey";
    typeBoxes5.style.background = "grey";
    typeBoxes6.style.background = "grey";
    typeBoxes7.style.background = "grey";
    typeBoxes8.style.background = "grey";
    typeBoxes9.style.background = "red";
  }
  else {
    typeBoxes1.style.background = "green";
    typeBoxes2.style.background = "green";
    typeBoxes3.style.background = "green";
    typeBoxes4.style.background = "green";
    typeBoxes5.style.background = "green";
    typeBoxes6.style.background = "green";
    typeBoxes7.style.background = "green";
    typeBoxes8.style.background = "green";
    typeBoxes9.style.background = "green";
  }
}




changeColors()



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


