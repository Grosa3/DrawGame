import {width} from './canvas';

export let controlBox : HTMLDivElement = document.querySelector('#controls');
controlBox.style.width = `${width}px`

export function makeButton (name : string) : HTMLButtonElement {
  let button = document.createElement("button");
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}
