var todayDate = moment().format("dddd, MMMM Do");

$("#currentDay").text(todayDate);

var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function createLine() {
  var schedule = $(".container");
  var line = $("<div></div>").addClass("input-group mb-3");
  var time = $("<label></label>").addClass(
    "col-sm-2 col-form-label col-form-label-lg"
  );
  var events = $("<input/>").addClass("form-control form-control-lg");
  var saveBtn = $("<button></button>").addClass("btn btn-outline-secondary");

  schedule.append(line);
  line.append(events);
}
