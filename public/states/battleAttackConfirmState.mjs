import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleAttackConfirm() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('CONFIRM ATTACK', canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('CANCEL', canvas.width - 180, stats.distanceBetweenStuff * 2);
}
function mainUp() {
  if (stats.selectBoxY != stats.distanceBetweenStuff) {
    stats.selectBoxY = stats.distanceBetweenStuff;
  }
}
function mainDown() {
  if (stats.selectBoxY != stats.distanceBetweenStuff * 2) {
    stats.selectBoxY = stats.distanceBetweenStuff * 2;
  }
}
function openSkillsMenu() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'skills';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battle';
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
