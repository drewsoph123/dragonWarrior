import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleRunConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('RUN', stats.baseStats.distanceBetweenStuffX, stats.baseStats.distanceBetweenStuffY);
  ctx.fillText(
    'CANCEL',
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
}

function mainUp() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
}
function mainDown() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY * 2;
}
function openBattleMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battle';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battle';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBattleRunConfirm();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleMenu,
  g: confirmChoice,
};
