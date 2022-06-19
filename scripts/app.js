//store class in global variable
const nonImpIcon = "far fa-star";
const impIcon = "fas fa-star";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  // console.log("clickaroo!");

  // $("#iImportant").removeClass(nonImpIcon);
  // $("#iImportant").addClass(impIcon);
  if (isImportant) {
    $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
    isImportant = true;
  }
}

function togglePanel() {
  console.log("display");
  if (isVisible) {
    $("#pnlForm").fadeOut();
    isVisible = false;
  } else {
    $("#pnlForm").fadeIn();
    isVisible = true;
  }
}
function register() {
  console.log("here you go");
  //store values title.iImportat.txtDuration.selDeadline.txtLocation.selStatus
  let title = $("#txtTitle").val();
  // let important=$("#iImportant").val();
  let duration = $("#txtDuration").val();
  let deadline = $("#selDeadline").val();
  let theLocation = $("#txtLocation").val();
  let status = $("#selStatus").val();

  $("input").val("");
  console.log(title, duration, deadline, theLocation, status, isImportant);

  let task = new Task(
    0,
    title,
    duration,
    deadline,
    theLocation,
    status,
    isImportant
  );
  console.log(task);
  displayTask(task);

  $("input").val("");

  //clear form
}

function displayTask(task) {
  let syntax = `<div class='task'>
  <h3> ${task.title} </h3>
  <label> ${task.place} </label>
  <div class='dates'>
  <label> ${task.duration} </label>
  <label> ${task.deadline} </label>
  </div>
  </div>`;

  $("#task-list").append(syntax);
}

function init() {
  //must load other file with function first to run it in other file and init
  // runTests();
  console.log("working");

  // load data

  //hook events
  //inline function anonymous
  // $("#iImportant").click(function(){
  //     console.log("clickaroo!");
  //  });
  $("#iImportant").click(toggleImportant);

  $("#btnShowHide").click(togglePanel);
  $("#btnReg").click(register);
}
window.onload = init;

//think of logic for toggle
