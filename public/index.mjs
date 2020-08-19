import states from './states/index.mjs';
import globals from './index.mjs';
import keyMappings from './keyMappings.mjs';

globals.currentState = 'main';
// const gameContinues = true;
document.addEventListener('keydown', keyDownHandler, false);

function getKey(e) {
  return keyMappings[e.key];
}

function keyDownHandler(e) {
  const key = getKey(e);
  console.log(key);
  if (states[globals.currentState][key]) {
    states[globals.currentState][key]();
  }
}
// while(gameContinues) {
//   states[globals.currentState].run()
// }
function draw() {
  states[globals.currentState].run();
  requestAnimationFrame(draw);
}
draw();
