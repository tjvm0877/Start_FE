const $boxes = document.querySelectorAll(".box");
let currentBox = null;
let offset = { x: 0, y: 0 };

function OnMouseDown(event) {
  currentBox = event.target;
  offset = {
    x: currentBox.clientWidth * 0.5,
    y: currentBox.clientHeight * 0.5,
  };
}

function OnMouseMove(event) {
  if (currentBox == null) return;
  var left = event.clientX - offset.x;
  var right = event.clientY - offset.y
  currentBox.style.left = left + `px`;
  currentBox.style.top = right + `px`;
}

function OnMouseUp() {
  currentBox = null;
  offset = { x: 0, y: 0 };
}

$boxes.forEach((box) => box.addEventListener("mousedown", OnMouseDown));
window.addEventListener("mousemove", OnMouseMove);
window.addEventListener("mouseup", OnMouseUp);