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
      ctx.rect(x, y, pixelSize, pixelSize);
      x += pixelSize;
    }
    y += pixelSize;
  }

  ctx.fill();
  ctx.stroke();
}

drawGrid(ctx, grid, PIXEL_SIZE);
