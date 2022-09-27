import { ctx, canvas } from './canvas';
import { makeButton } from './controls';

let drawCircleButton = makeButton("Draw Semicircle");
drawCircleButton.addEventListener(
  "click",
  function() {
    ctx.beginPath()
    ctx.arc(300, 300, 100, 0, Math.PI)
    ctx.stroke();
  });

let clearScreenButton = makeButton('Clear Screen')
clearScreenButton.addEventListener(
  'click',
  function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
);
function drawOnClick(event) {
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}
let drawingLines = false;
let drawLinesButton = makeButton('Draw Lines');
drawLinesButton.addEventListener(
  "click",
  function() {
    if (!drawingLines) {
      ctx.beginPath();
      canvas.addEventListener('click', drawOnClick);
      drawingLines = true;
      drawLinesButton.textContent = 'Stop drawing lines';
    } else {
      drawingLines = false;
      canvas.removeEventListener('click', drawOnClick);
      drawLinesButton.textContent = 'Draw Lines';
    }
  }
)

//
function drawOnDrag (event : MouseEvent) {
  if (event.buttons) {
    // Draw when mouse is down
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else {
    // Start new path once mouse is lifted
    ctx.beginPath();
  }
}
//
//import {ctx} from './canvas';
//import {makeButton} from './canvas';
//
//ctx.strokeStyle = 'blue';
let drawInBlueButton = makeButton('Blue');
drawInBlueButton.addEventListener(
  'click',
  function () {ctx.strokeStyle = 'blue';}
  );
// make red button
makeButton('Red')
   .addEventListener(
     'click',
     function () {ctx.strokeStyle = 'red'}
     );

export function makeInput (inputType : string) : HTMLInputElement {
  let input = document . createElement('input');
  //Set type attribute to inputtype
  input.setAttribute(
    'type',inputType
  );
  controlBox.appendChild(input);
  return input;
}
export function makeLabeledInput(labeltext : string, inputType : string)
  : HTMLInputElement {
    let label = document .createElement('label');
    label.textContent = labeltext;
    let input = document.createElement('input');
    input.setAttribute ('type',inputType);
    label.appendChild(label);
    return input;
  }
canvas.style.backgroundColor='black'
