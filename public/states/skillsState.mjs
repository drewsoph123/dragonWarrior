import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSkills() {
  if (stats.lvl > 2) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('HEAL: 4 MANA', canvas.width - 180, stats.distanceBetweenStuff);
  }
  if (stats.lvl > 3) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(
      'HURT: 2 MANA ' + stats.manaPotions,
      canvas.width - 180,
      stats.distanceBetweenStuff * 2
    );
  }
  if (stats.lvl > 6) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(
      'SLEEP: 2 MANA' + stats.antidotes,
      canvas.width - 180,
      stats.distanceBetweenStuff * 3
    );
  }
  if (stats.lvl > 9) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(
      'STOP SPELL: 2 MANA' + stats.incenses,
      canvas.width - 180,
      stats.distanceBetweenStuff * 4
    );
  }
  if (stats.lvl > 16) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(
      'HEAL MORE: 10 MANA' + stats.repels,
      canvas.width - 180,
      stats.distanceBetweenStuff * 5
    );
  }
  if (stats.lvl > 18) {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(
      'HURT MORE: 5 MANA' + stats.keys,
      canvas.width - 180,
      stats.distanceBetweenStuff * 6
    );
  }
}

function drawBox() {
  ctx.beginPath();
  ctx.rect(stats.selectBoxX, stats.selectBoxY, stats.selectBoxWidth, stats.selectBoxHeight);
  ctx.stroke();
  ctx.closePath();
}

function mainUp() {
  if (stats.selectBoxY > stats.distanceBetweenStuff) {
    stats.selectBoxY -= stats.distanceBetweenStuff;
  }
}
function mainDown() {
  if (stats.selectBoxY < stats.totalSkills * stats.distanceBetweenStuff) {
    stats.selectBoxY += stats.distanceBetweenStuff;
  }
}
function openMainState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'main';
}
function openSkillConfirmState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'skillConfirm';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSkills();
    drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openMainState,
  g: openSkillConfirmState,

  // const availableSkills = [
  //     'heal',
  //     'hurt',
  //     'sleep',
  //     'stopSpell',
  //     'healMore',
  //     'hurtMore',
  // ];
};
