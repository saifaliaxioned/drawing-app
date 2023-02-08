const addBtn = document.querySelector('.add'),
  substractBtn = document.querySelector('.substract'),
  drawingPage = document.querySelector('.drawing-page'),
  numbers = document.querySelector('.numbers'),
  colors = document.querySelector('#colors'),
  clearBtn = document.querySelector('.clear-btn span');

let counter = 5;
numbers.innerText = counter;


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

// colors.style.background = `#${(Math.random()).toString(16).slice(-6)}`;
// colors.addEventListener('click', () => {
//   colors.style.background = `#${(Math.random()).toString(16).slice(-6)}`;
// });


const lineDraw = (colorStore) => {
  colorStore = colors.style.background;
  let paddingValue = numbers.innerText;
  const line = document.createElement('div');
  line.style.padding = `${paddingValue}px`;
  line.style.background = colorStore;
  drawingPage.appendChild(line);
}
drawingPage.addEventListener('mousedown', lineDraw(colorStore))























