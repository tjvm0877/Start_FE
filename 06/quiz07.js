const $box = document.querySelector(".box");
const $bug = document.getElementById("bug");
const $point = document.getElementById("point");
const $life = document.getElementById("life");
let isBugAlive = true;

function PlaceBugInRandomPosition() {
  $bug.style.left = `${
    Math.random() * ($box.clientWidth - $bug.clientWidth)
  }px`;
  $bug.style.top = `${
    Math.random() * ($box.clientHeight - $bug.clientHeight)
  }px`;
  isBugAlive = true;
}

function IncreasePoint() {
  $point.textContent = parseInt($point.textContent) + 1;
}

function DecreaseLife() {
  if ($life.textContent == 0) {
    AlertGameOver();
    return;
  }
  $life.textContent = parseInt($life.textContent) - 1;
}

function AlertGameOver() {
  alert("game over");
}

function OnclickBox() {
  if (isBugAlive === true) {
    DecreaseLife();
  } else {
    PlaceBugInRandomPosition();
  }
}

function OnclickBug() {
  if (isBugAlive === true) {
    IncreasePoint();
    isBugAlive = false;
  }
}

$box.addEventListener("click", OnclickBox);

$bug.addEventListener("click", OnclickBug);