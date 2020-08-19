import stats from '../globals/index.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawPotentialSkills() {
  if (stats.lvl > 2) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('HEAL: 4 MANA', canvas.width - 180, stats.distanceBetweenStuff);
  }
  if (stats.lvl > 3) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('HURT: 2 MANA ', canvas.width - 180, stats.distanceBetweenStuff * 2);
  }
  if (stats.lvl > 6) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('SLEEP: 2 MANA', canvas.width - 180, stats.distanceBetweenStuff * 3);
  }
  if (stats.lvl > 9) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('STOP SPELL: 2 MANA', canvas.width - 180, stats.distanceBetweenStuff * 4);
  }
  if (stats.lvl > 16) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('HEAL MORE: 10 MANA', canvas.width - 180, stats.distanceBetweenStuff * 5);
  }
  if (stats.lvl > 18) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('HURT MORE: 5 MANA', canvas.width - 180, stats.distanceBetweenStuff * 6);
  }
}
function drawSkillBox() {
  ctx.beginPath();
  ctx.rect(stats.selectBoxX, stats.selectBoxY, stats.selectBoxWidth, stats.selectBoxHeight);
  ctx.stroke();
  ctx.closePath();
}

function mainUp() {
  if (stats.skillSelectBoxY > stats.distanceBetweenStuff) {
    stats.selectBoxY -= stats.distanceBetweenStuff;
  }
}
function mainDown() {
  if (stats.skillSelectBoxY < stats.totalItems * stats.distanceBetweenStuff) {
    stats.selectBoxY += stats.distanceBetweenStuff;
  }
}
function openBattleState() {
  stats.skillSelectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battle';
}
function openBattleSkillConfirmState() {
  stats.skillSelectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battleItemConfirm';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPotentialSkills();
    drawSkillBox();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleState,
  g: openBattleSkillConfirmState,

  // const availableSkills = [
  //     'heal',
  //     'hurt',
  //     'sleep',
  //     'stopSpell',
  //     'healMore',
  //     'hurtMore',
  // ];
};
