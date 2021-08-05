var todayDate = moment().format("dddd, MMMM Do");

$("#currentDay").text(todayDate);

var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//For each of the i in businessHours, createLine with time using array value

console.log(moment(businessHours[4], "HH").format("HH A"));

$.each(businessHours, function (i, time) {
  var schedule = $(".container");
  var line = $("<div></div>").addClass("input-group mb-3");
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
    .attr("type", "button");
  var saveIcon = $("<i class='bi bi-save'></i>");

  schedule.append(line);
  line.append(time);
  line.append(events);
  line.append(saveBtn);
  saveBtn.append(saveIcon);
});
