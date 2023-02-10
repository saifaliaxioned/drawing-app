const addBtn = document.querySelector('.add'),
  substractBtn = document.querySelector('.substract'),
  drawingPage = document.querySelector('.drawing-page'),
  drawingBox = document.querySelector('.drawing-box'),
  numbers = document.querySelector('.numbers'),
  colors = document.querySelector('.colors'),
  clearBtn = document.querySelector('.clear-btn'),
  canvas = document.querySelector('.drawing-board'),
  ctx = canvas.getContext('2d'),
  drawingPageWidth = drawingPage.clientWidth,
  drawingPageHeight = drawingPage.clientHeight,
  canvasOffsetX = canvas.offsetLeft,
  canvasOffsetY = canvas.offsetTop;

canvas.width = drawingPageWidth;
canvas.height = drawingPageHeight;

let isPainting = false;
let lineWidth = 5;
numbers.innerText = lineWidth;

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colors.addEventListener('change', e => {
  ctx.strokeStyle = e.target.value;
});

const draw = (e) => {
  if (!isPainting) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', () => {
  isPainting = true;
});

canvas.addEventListener('mouseup', () => {
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
























