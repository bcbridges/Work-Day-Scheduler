//Finds current day and sets at top of screen
var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todayDate);

var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//Loops through businessHours array and creates time, form, and button for each item.
$.each(businessHours, function (i, time) {
  var schedule = $(".container");
  var line = $("<form></form>").addClass("input-group row");
  var time = $("<label></label>")
    .addClass("col-sm-2 col-form-label col-form-label-lg hour")
    .attr("for", "colFormLabelLg")
    .text(moment(time, "H").format("h A"));
  var events = $("<input/>")
    .addClass("form-control form-control-lg h-100 hour")
    .attr("id", "colFormLabelLg")
    .attr("data-key", i + 8)
    .attr("aria-describedby", "button-addon2");
  var saveBtn = $("<button></button>")
    .addClass("btn btn-outline-secondary saveBtn")
    .attr("id", "button-addon2")
    .attr("type", "button")
    .attr("data-key", i + 8);
  var saveIcon = $("<i class='bi bi-save'></i>");

  schedule.append(line);
  line.append(time);
  line.append(events);
  line.append(saveBtn);
  saveBtn.append(saveIcon);
});

// creates array that will hold all existing and new storage events
var storedEvents = {
  time: [],
  item: [],
};

//pull and set existing local storage events
var localStoredEvents = JSON.parse(localStorage.getItem("storedEvents"));
if (localStoredEvents === null) {
} else {
  storedEvents.time = localStoredEvents.time;
  storedEvents.item = localStoredEvents.item;
}

// for each time in the array, update the input value to the item

$.each(storedEvents.time, function (i) {
  $("input")
    .eq(storedEvents.time[i] - 8)
    .attr("placeholder", storedEvents.item[i]);
});

//When click save, store item to local storage.
$("button").click(function () {
  var eventTime = $(this).attr("data-key");
  var enteredEvent = $("input")
    .eq(eventTime - 8)
    .val();

  storedEvents.time.push(eventTime);
  storedEvents.item.push(enteredEvent);

  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
});

// Sets the current hour and converts string to number
var currentHour = moment().format("H");
currentHour = Number(currentHour);

// iterates through all times and sets background
$("input").each(function (i, element) {
  var eventHour = this.dataset.key;

  if (eventHour < currentHour) {
    $(this).addClass("past");
  } else if (eventHour == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

$("input").keydown(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});
