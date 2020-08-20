import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleButtons() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('D: SKILLS', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: ATTACK', canvas.width * 0.25, canvas.height * 0.9);
  ctx.fillText('R: ITEMS', canvas.width * 0.15, canvas.height * 0.85);
  ctx.fillText('V: RUN', canvas.width * 0.15, canvas.height * 0.95);
}

function openBattleSkillsSelectState() {
  if (stats.lvl > 2) {
    states.currentState = 'battleSkillsSelect';
  } else {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('YOU HAVE NO SKILLS YET', canvas.width * 0.05, canvas.height * 0.9);
  }
}
function openBattleItemsSelectState() {
  if (stats.totalItems > 0) {
    states.currentState = 'battleItemsSelect';
  } else {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('YOU HAVE NO ITEMS', canvas.width * 0.05, canvas.height * 0.9);
  }
}
function openBattleAttackConfirmState() {
  states.currentState = 'battleAttackConfirm';
}
function openBattleRunConfirmState() {
  states.currentState = 'battleRunConfirm';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBattleButtons();
  },

  d: openBattleSkillsSelectState,
  r: openBattleItemsSelectState,
  g: openBattleAttackConfirmState,
  v: openBattleRunConfirmState,
};
