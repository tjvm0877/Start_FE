const btn = document.getElementById('btn');
const box = document.getElementById('box');

const index = -20;
let min = 0;
let max = 0;
let result = 0;
let count = index;
let timer = null;

function getValue() {
  min = document.getElementById('min').value;
  max = document.getElementById('max').value;
  box.textContent = min;
}

function setResult(resultNum) {
  box.innerHTML = resultNum + count;
  count += 1;
  if (count === 1) {
    clearInterval(timerId);
    btn.disabled = false;
    count = index;
  }
}

function random(minNum, maxNum) {
  const minX = Math.ceil(minNum);
  const maxY = Math.floor(maxNum);
  result = Math.floor(Math.random() * (maxY - minX) + minX);
  timerId = setInterval(setResult, 50, result);
  btn.disabled = true;
}

btn.addEventListener('click', (event) => {
  getValue();
  random(min, max);
  box.innerHTML = result;
});
