var todayDate = moment().format("dddd, MMMM Do");

$("#currentDay").text(todayDate);

var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//Loops through businessHours array and creates time, form, and button for each item.
$.each(businessHours, function (i, time) {
  var schedule = $(".container");
  var line = $("<form></form>").addClass("input-group mb-3");
  var time = $("<label></label>")
    .addClass("col-sm-2 col-form-label col-form-label-lg")
    .attr("for", "colFormLabelLg")
    .text(moment(time, "H").format("h A"));
  var events = $("<input/>")
    .addClass("form-control form-control-lg")
    .attr("id", "colFormLabelLg")
    .attr("aria-describedby", "button-addon2");
  var saveBtn = $("<button></button>")
    .addClass("btn btn-outline-secondary")
    .attr("id", "button-addon2")
    .attr("type", "button")
    .attr("data-key", i);
  var saveIcon = $("<i class='bi bi-save'></i>");

  schedule.append(line);
  line.append(time);
  line.append(events);
  line.append(saveBtn);
  saveBtn.append(saveIcon);
});

//When click save, store item to local storage.
$("button").click(function () {
  var enteredEvent = $("input").val();
  var test = $(this).attr("data-key");
  console.log(enteredEvent);
  console.log(test);
});

//Populate hours with save items
