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

  for (let i = 0; i < cols; i++) {
    x = 0;
    for (let j = 0; j < rows; j++) {
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

fill(grid, 3, 3, 4, 4, generateRandomColor());
fill(grid, 10, 10, 10, 10, generateRandomColor());
fill(grid, 0, 0, 2, 2, generateRandomColor());
fill(grid, 0, 14, 10, 14, generateRandomColor());

drawGrid(ctx, grid, PIXEL_SIZE);
