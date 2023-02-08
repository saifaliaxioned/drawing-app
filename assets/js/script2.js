const addBtn = document.querySelector('.add'),
  substractBtn = document.querySelector('.substract'),
  drawingPage = document.querySelector('.drawing-page'),
  numbers = document.querySelector('.numbers'),
  colors = document.querySelector('#colors'),
  clearBtn = document.querySelector('.clear-btn span'),
  canvas = document.querySelector('#drawing-board'),
  ctx = canvas.getContext('2d');

numbers.innerText = counter;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let counter = 5;
let startX;
let startY;















let colorStore;
colors.addEventListener("input", function () {
  colorStore = colors.value;
  // Do something with `theColor` here.
  lineDraw(colorStore);
}, false);

addBtn.addEventListener('click', () => {
  counter += 5;
  numbers.innerText = counter;
});

substractBtn.addEventListener('click', () => {
  if (numbers.innerText != 5) {
    counter -= 5;
    numbers.innerText = counter;
  }
});
























