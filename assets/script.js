// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format("dddd, MMMM D, YYYY"));
  
  // Gets the current hour using dayjs
  var currentHour = dayjs().hour();
  console.log(currentHour)
  // Selects all elements with the class 'saveBtn'
  var saveBtnEl = $('.saveBtn');
  var timeBlockPast = $(".time-block");
  // console.log(timeBlockPast)
  for (var i = 0; i < timeBlockPast.length; i++) {

    var block = $(timeBlockPast[i]);
    var blockId = block.attr("id");
    var textarea = block.find("textarea")

    var userInput = localStorage.getItem(blockId);

    textarea.val(userInput);

    // console.log($(timeBlockPast[i]))
    // console.log($(timeBlockPast [i]).attr("id").split("hour-")[1]);
    var blockHour = parseInt($(timeBlockPast[i]).attr("id").split("hour-")[1])

    if(blockHour < currentHour){
      //PAST
      $(timeBlockPast[i]).addClass("past")
    }
    if(blockHour === currentHour){
      $(timeBlockPast[i]).addClass("present")
    }
    if(blockHour > currentHour){
  $(timeBlockPast[i]).addClass("future")

    }
    //$(timeBlockPast[i]).addClass("present")
  }

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
 
});


saveBtnEl.on("click", function() {
  var textArea = $(this).siblings("textarea");

  var userInput = textarea.val();

  var blockId = $(this).closest(".time-block").attr("id");

  localStorage.setItem(blockId, userInput);

});


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
  