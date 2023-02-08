const addBtn = document.querySelector('.add'),
  substractBtn = document.querySelector('.substract'),
  drawingPage = document.querySelector('.drawing-page'),
  drawingBox = document.querySelector('.drawing-box'),
  numbers = document.querySelector('#numbers'),
  colors = document.querySelector('#colors'),
  clearBtn = document.querySelector('.clear-btn span'),
  canvas = document.querySelector('#drawing-board'),
  ctx = canvas.getContext('2d');


const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;
numbers.innerText = lineWidth;

drawingPage.addEventListener('click', e => {
  if (e.target.id === 'clear') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

drawingPage.addEventListener('change', e => {
  if (e.target.id === 'colors') {
    ctx.strokeStyle = e.target.value;
  }

  if (e.target.id === 'numbers') {
    lineWidth = e.target.value;
  }
});

const draw = (e) => {
  if (!isPainting) {
    return;
  }
  ctx.lineWidth = lineWidth
  ctx.linCap = 'round';

  // ctx.lineTo(e.clientX - canvasOffsetX,e.clientY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);



canvas.addEventListener('mousedown', e => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
  ctx.beginPath();
})
canvas.addEventListener('mouseup', e => {
  isPainting = false;
  ctx.storke();
  ctx.beginPath();
})













// let colorStore;
// colors.addEventListener("input", function () {
//   colorStore = colors.value;
//   // Do something with `theColor` here.
//   lineDraw(colorStore);
// }, false);

addBtn.addEventListener('click', () => {
  lineWidth += 5;
  numbers.innerText = lineWidth;
});

substractBtn.addEventListener('click', () => {
  if (numbers.innerText != 5) {
    lineWidth -= 5;
    numbers.innerText = lineWidth;
  }
});
























