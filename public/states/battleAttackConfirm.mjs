import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleAttackConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'CONFIRM ATTACK',
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY
  );
  ctx.fillText(
    'CANCEL',
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
}
function mainUp() {
  if (stats.baseStats.selectBoxY != stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  }
}
function mainDown() {
  if (stats.baseStats.selectBoxY != stats.baseStats.distanceBetweenStuffY * 2) {
    stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY * 2;
  }
}
function openSkillsMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'skills';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battle';
}
export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBattleAttackConfirm();
  },

  up: mainUp,
  down: mainDown,
  d: openSkillsMenu,
  g: confirmChoice,
};
