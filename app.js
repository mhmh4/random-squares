const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 300;

console.log(canvas);

const PIXEL_SIZE = 25;

const m = canvas.clientWidth / PIXEL_SIZE;
const n = canvas.clientHeight / PIXEL_SIZE;

console.log(canvas.clientWidth, "->", m);
console.log(canvas.clientHeight, "->", n);

const grid = [];

for (let i = 0; i < m; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
    row.push("#fff");
  }
  grid.push(row);
}
console.log(grid);

function drawGrid(ctx, grid, pixelSize) {
  const rows = grid.length;
  const cols = grid[0].length;

  let x = 0;
  let y = 0;

  ctx.beginPath();
  ctx.strokeStyle = "#333";

  for (let j = 0; j < cols; j++) {
    x = 0;
    for (let i = 0; i < rows; i++) {
      ctx.fillStyle = grid[i][j];
      ctx.fillRect(x, y, pixelSize, pixelSize);
      ctx.strokeRect(x, y, pixelSize, pixelSize);
      x += pixelSize;
    }
    y += pixelSize;
  }
}

drawGrid(ctx, grid, PIXEL_SIZE);

function fill(grid, i1, j1, i2, j2, color) {
  for (let x = i1; x <= i2; x++) {
    for (let y = j1; y <= j2; y++) {
      grid[x][y] = color;
    }
  }
}

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(generateRandomColor());

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let x = getRandomIntInclusive(0, grid.length - 2);
let y = getRandomIntInclusive(0, grid[0].length - 2);

let x2 = x + 1;
let y2 = y + 1;

console.log(x, y);

fill(grid, x, y, x2, y2, "#ff0000");
drawGrid(ctx, grid, PIXEL_SIZE);
