const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

const PIXEL_SIZE = 20;
const SCALE = 2;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.style.width = CANVAS_WIDTH + "px";
canvas.style.height = CANVAS_HEIGHT + "px";

canvas.width = CANVAS_WIDTH * SCALE;
canvas.height = CANVAS_HEIGHT * SCALE;

function draw(ctx, canvas, pixelSize) {
  const rows = canvas.width;
  const cols = canvas.height;

  for (let i = 0; i < rows; i += pixelSize) {
    for (let j = 0; j < cols; j += pixelSize) {
      ctx.strokeRect(i, j, pixelSize, pixelSize);
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

draw(ctx, canvas, PIXEL_SIZE);
