const $box = document.getElementById("box");
const offset = { x: $box.clientWidth * 0.5, y: $box.clientHeight * 0.5 };
let isMousePressed = false;

function OnMouseDown() {
  isMousePressed = true;
}

function OnMouseMove(event) {
  if (isMousePressed == false) return;
  $box.style.left = `${event.clientX - offset.x}px`;
  $box.style.top = `${event.clientY - offset.y}px`;
}

function OnMouseUp() {
  isMousePressed = false;
}

$box.addEventListener("mousedown", OnMouseDown);
window.addEventListener("mousemove", OnMouseMove);
$box.addEventListener("mouseup", OnMouseUp);