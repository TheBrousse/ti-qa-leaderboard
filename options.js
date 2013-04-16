// Saves options to localStorage.
function save_options() {
  var newName = document.getElementById("userName").value;
  var newInterval = document.getElementById("refreshInterval").value;

  localStorage["userName"] = newName;
  localStorage["refreshInterval"] = newInterval;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var savedInterval = localStorage["refreshInterval"];
  if (!savedInterval) {
    savedInterval = 15;
  }
  document.getElementById("refreshInterval").value = savedInterval;

  var savedName = localStorage["userName"];
  if (!savedName) {
    return;
  }
  document.getElementById("userName").value = savedName;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);