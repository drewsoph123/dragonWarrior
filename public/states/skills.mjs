import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSkills() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'HEAL: 4 MANA',
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY
  );
  if (stats.lvl > 3) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HURT: 2 MANA ' + stats.manaPotions,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 2
    );
  }
  if (stats.lvl > 6) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'SLEEP: 2 MANA' + stats.antidotes,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 3
    );
  }
  if (stats.lvl > 9) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'STOP SPELL: 2 MANA' + stats.incenses,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 4
    );
  }
  if (stats.lvl > 16) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HEAL MORE: 10 MANA' + stats.repels,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 5
    );
  }
  if (stats.lvl > 18) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HURT MORE: 5 MANA' + stats.keys,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 6
    );
  }
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

function mainUp() {
  if (stats.baseStats.selectBoxY > stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY -= stats.baseStats.distanceBetweenStuffY;
  }
}
function mainDown() {
  if (stats.baseStats.selectBoxY < stats.totalSkills * stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY += stats.baseStats.distanceBetweenStuffY;
  }
}
function openMainState() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY - 15;
  states.currentState = 'main';
}
function openSkillConfirmState() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY - 15;
  states.currentState = 'skillConfirm';
}

function drawButtons() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('D: BACK', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: USE SKILL', canvas.width * 0.25, canvas.height * 0.9);
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSkills();
    drawButtons();
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
