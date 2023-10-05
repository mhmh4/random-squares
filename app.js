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

for (let x = 0; x < canvas.clientWidth; x += PIXEL_SIZE) {
  for (let y = 0; y < canvas.clientHeight; y += PIXEL_SIZE) {
    ctx.strokeRect(x, y, x + PIXEL_SIZE, y + PIXEL_SIZE);
  }
}
