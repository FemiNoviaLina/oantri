var modal = document.getElementById("logo-modal");

var btn = document.getElementById("outlet-logo");

var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("photo-modal");

var btn2 = document.getElementById("outlet-photo");

var span2 = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}