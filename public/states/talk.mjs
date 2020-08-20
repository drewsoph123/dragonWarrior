//import stats from '../globals/index.mjs';
// import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function talkDisplay() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('WE NEED HELP KILLING THE ZOMBIES', canvas.width - 240, canvas.height - 50); //Need massive array with tons of villagers and different responses
  ctx.fillText('G: NEXT', canvas.width * 0.25, canvas.height * 0.9);
}

export default function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  talkDisplay();
}
