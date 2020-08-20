import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawPotentialSkills() {
  if (stats.lvl > 2) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HEAL: 4 MANA',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY
    );
  }
  if (stats.lvl > 3) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HURT: 2 MANA ',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 2
    );
  }
  if (stats.lvl > 6) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'SLEEP: 2 MANA',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 3
    );
  }
  if (stats.lvl > 9) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'STOP SPELL: 2 MANA',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 4
    );
  }
  if (stats.lvl > 16) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HEAL MORE: 10 MANA',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 5
    );
  }
  if (stats.lvl > 18) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'HURT MORE: 5 MANA',
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * 6
    );
  }
}
function drawSkillBox() {
  ctx.beginPath();
  ctx.rect(
    stats.baseStats.selectBoxX,
    stats.baseStats.selectBoxY,
    stats.selectBoxWidth,
    stats.selectBoxHeight
  );
  ctx.stroke();
  ctx.closePath();
}

function mainUp() {
  if (stats.skillSelectBoxY > stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY -= stats.baseStats.distanceBetweenStuffY;
  }
}
function mainDown() {
  if (stats.skillSelectBoxY < stats.totalItems * stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY += stats.baseStats.distanceBetweenStuffY;
  }
}
function openBattleState() {
  stats.skillSelectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battle';
}
function openBattleSkillConfirmState() {
  stats.skillSelectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battleItemConfirm';
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
