const addBtn = document.querySelector('.add'),
  substractBtn = document.querySelector('.substract'),
  drawingPage = document.querySelector('.drawing-page'),
  drawingBox = document.querySelector('.drawing-box'),
  numbers = document.querySelector('#numbers'),
  colors = document.querySelector('#colors'),
  clearBtn = document.querySelector('.clear-btn'),
  canvas = document.querySelector('#drawing-board'),
  ctx = canvas.getContext('2d'),
  drawingPageWidth = drawingPage.clientWidth,
  drawingPageHeight = drawingPage.clientHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = drawingPageWidth;
canvas.height = drawingPageHeight;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;
numbers.innerText = lineWidth;

clearBtn.addEventListener('click', e => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

drawingBox.addEventListener('change', e => {
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
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
  // ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', e => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
  ctx.beginPath();
});
canvas.addEventListener('mouseup', e => {
  isPainting = false;
  ctx.beginPath();
});

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
























