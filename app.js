const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const PIXEL_SIZE = 20;

const SCALE = 2;

canvas.style.width = CANVAS_WIDTH + "px";
canvas.style.height = CANVAS_HEIGHT + "px";

canvas.width = CANVAS_WIDTH * SCALE;
canvas.height = CANVAS_HEIGHT * SCALE;

const m = canvas.width / PIXEL_SIZE;
const n = canvas.height / PIXEL_SIZE;

let palette = ["#21295C", "#1B3B6F", "#065A82", "#1C7293", "#304C89"];
const grid = createGrid(m, n, "#fff");

const inputs = document.querySelectorAll(".palette-color");
const previews = document.querySelectorAll(".color-preview");

const NUM_ITERATIONS = 20000;
const lengths = [5, 4, 3, 2, 1];

const generateButton = document.getElementById("generate-button");

function createGrid(rows, cols, val) {
  const output = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(val);
    }
    output.push(row);
  }
  return output;
}

function drawGrid(ctx, grid, pixelSize) {
  const rows = grid.length;
  const cols = grid[0].length;

  let x = 0;
  let y = 0;

  for (let j = 0; j < cols; j++) {
    x = 0;
    for (let i = 0; i < rows; i++) {
      ctx.fillStyle = grid[i][j];
      ctx.fillRect(x, y, pixelSize, pixelSize);
      x += pixelSize;
    }
    y += pixelSize;
  }
}

function fill(grid, i1, j1, i2, j2, color) {
  for (let x = i1; x <= i2; x++) {
    for (let y = j1; y <= j2; y++) {
      grid[x][y] = color;
    }
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function choice(array) {
  const randomIndex = getRandomIntInclusive(0, array.length - 1);
  return array[randomIndex];
}

function update() {
  for (let i = 0; i < NUM_ITERATIONS; i++) {
    const length = choice(lengths);

    let x = getRandomIntInclusive(0, grid.length - 1 - length);
    let y = getRandomIntInclusive(0, grid[0].length - 1 - length);

    let x2 = x + length;
    let y2 = y + length;

    fill(grid, x, y, x2, y2, choice(palette));
  }

  drawGrid(ctx, grid, PIXEL_SIZE);
}

generateButton.addEventListener("click", () => {
  update();
});

window.addEventListener("load", () => {
  update();
});
