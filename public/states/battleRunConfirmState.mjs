import stats from '../globals/index.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleRunConfirm() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('RUN', canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('CANCEL', canvas.width - 180, stats.distanceBetweenStuff * 2);
}

function mainUp() {
  stats.selectBoxY = stats.distanceBetweenStuff;
}
function mainDown() {
  stats.selectBoxY = stats.distanceBetweenStuff * 2;
}
function openBattleMenu() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battle';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battle';
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
