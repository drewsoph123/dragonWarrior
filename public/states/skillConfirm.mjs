import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSkillConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'USE SKILL',
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
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY - 15;
}
function mainDown() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY * 2 - 15;
}
function openSkillsState() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY - 15;
  states.currentState = 'skills';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY - 15;
  states.currentState = 'skills';
}
function drawBox() {
  ctx.beginPath();
  ctx.rect(
    stats.baseStats.selectBoxX,
    stats.baseStats.selectBoxY,
    stats.baseStats.selectBoxWidth,
    stats.baseStats.selectBoxHeight
  );
  ctx.stroke();
  ctx.closePath();
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSkillConfirm();
    drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openSkillsState,
  g: confirmChoice,
};
