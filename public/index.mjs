import states from './states/index.mjs';
import keyMappings from './keyMappings.mjs';

states.currentState = 'mainCastleThrone';
// const gameContinues = true;
document.addEventListener('keydown', keyDownHandler, false);

function getKey(e) {
  return keyMappings[e.key];
}

function keyDownHandler(e) {
  const key = getKey(e);
  if (states[states.currentState][key]) {
    states[states.currentState][key]();
  }
}
// while(gameContinues) {
//   states[globals.currentState].run()
// }
function draw() {
  states[states.currentState].run();
  requestAnimationFrame(draw);
}
draw();
