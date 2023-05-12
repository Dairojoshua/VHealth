function show() {
  document.getElementById("ja").style.display = "block";
  document.getElementById("jaa").style.display = "inline-block";
}

function soji() {
  document.getElementById("tay").style.display = "block";
  document.getElementById("taya").style.display = "inline-block";
}

function increase_by_one(feild) {
  nr = parseInt(document.getElementById(field).value);
  document.getElementById(field).value = nr + 1;
}

function decrease_by_one(feild) {
  nr = parseInt(document.getElementById(field).value);
  if (nr > 0) {
    if (nr - 1 > 0) {
      document.getElementById(field).value = nr - 1;
    }
  }
}
