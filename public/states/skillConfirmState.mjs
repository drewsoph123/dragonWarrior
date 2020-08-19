import stats from '../globals/index.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSkillConfirm() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('USE SKILL', canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('CANCEL', canvas.width - 180, stats.distanceBetweenStuff * 2);
}

function mainUp() {
  stats.selectBoxY = stats.distanceBetweenStuff;
}
function mainDown() {
  stats.selectBoxY = stats.distanceBetweenStuff * 2;
}
function openSkillsState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'skills';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'skills';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSkillConfirm();
  },

  up: mainUp,
  down: mainDown,
  d: openSkillsState,
  g: confirmChoice,
};
