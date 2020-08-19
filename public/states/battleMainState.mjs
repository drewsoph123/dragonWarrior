import stats from '../globals/index.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleButtons() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('D: SKILLS', canvas.width - 450, canvas.height - 60);
  ctx.fillText('G: ATTACK', canvas.width - 350, canvas.height - 60);
  ctx.fillText('R: ITEMS', canvas.width - 400, canvas.height - 90);
  ctx.fillText('V: RUN', canvas.width - 400, canvas.height - 30);
}

function openBattleSkillsSelectState() {
  if (stats.lvl > 2) {
    stats.currentState = 'battleSkillsSelect';
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('YOU HAVE NO SKILLS YET', canvas.width - 450, canvas.height - 60);
  }
}
function openBattleItemsSelectState() {
  if (stats.totalItems > 0) {
    stats.currentState = 'battleItemsSelect';
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('YOU HAVE NO ITEMS', canvas.width - 450, canvas.height - 60);
  }
}
function openBattleAttackConfirmState() {
  stats.currentState = 'battleAttackConfirm';
}
function openBattleRunConfirmState() {
  stats.currentState = 'battleRunConfirm';
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
