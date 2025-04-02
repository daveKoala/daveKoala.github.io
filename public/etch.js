const canvas = document.getElementById("etchCanvas");
const ctx = canvas.getContext("2d");
const leftKnob = document.querySelector(".knobs .knob:first-child");
const rightKnob = document.querySelector(".knobs .knob:last-child");

// Start position
let x = canvas.width / 2;
let y = canvas.height / 2;

let leftKnobRotation = 0;
let rightKnobRotation = 0;

// Draw starting point
ctx.lineWidth = 2;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

document.addEventListener("keydown", function (event) {
  const step = 5;
  let newX = x;
  let newY = y;

  switch (event.key) {
    case "ArrowUp":
      newY = Math.max(0, y - step);
      rightKnobRotation += 10;
      break;
    case "ArrowDown":
      //   newY = Math.min(canvas.height, y + step);
      newY = Math.min(canvas.height - 1, y + step);
      rightKnobRotation -= 10;
      break;
    case "ArrowLeft":
      newX = Math.max(0, x - step);
      leftKnobRotation -= 10;
      break;
    case "ArrowRight":
      //   newX = Math.min(canvas.width, x + step);
      newX = Math.min(canvas.width - 1, x + step);
      leftKnobRotation += 10;
      break;
    default:
      return; // Exit if not an arrow key
  }

  // Rotate the knob lines
  leftKnob.style.transform = `rotate(${leftKnobRotation}deg)`;
  rightKnob.style.transform = `rotate(${rightKnobRotation}deg)`;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.stroke();

  x = newX;
  y = newY;
});
