import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleAttackConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'CONFIRM ATTACK',
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
  if (stats.baseStats.selectBoxY != stats.baseStats.selectBoxStartingY) {
    stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  }
}
function mainDown() {
  if (stats.baseStats.selectBoxY == stats.baseStats.selectBoxStartingY) {
    stats.baseStats.selectBoxY =
      stats.baseStats.distanceBetweenStuffY + stats.baseStats.selectBoxStartingY;
  }
}
function openBattleMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battle';
}
function confirmChoice() {
  if ((stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY)) {
    stats.baseStats.attackName = 'ATTACK';
    if (Math.random() < stats.baseStats.accuracy) {
      stats.baseStats.damageDealt =
        stats.baseStats.baseDamage + stats.equip.weapon[stats.baseStats.currentWeapon];
      stats.baseStats.battleMessageToDisplayPartOne = `YOU HIT THE ${stats.baseStats.enemyName} WITH`;
      stats.baseStats.battleMessageToDisplayPartTwo = `${stats.baseStats.attackName} AND DID ${stats.baseStats.damageDealt} DAMAGE`;
      stats.baseStats.battleMessageToDisplayPartThree = '';
      stats.baseStats.enemyHp -= stats.baseStats.damageDealt;
      stats.baseStats.damageDealt = 0;
      if (stats.baseStats.enemyHp > 0) {
        stats.baseStats.enemyTurn = true;
      } else {
        stats.baseStats.battleMessage = 1;
      }
    } else {
      stats.baseStats.battleMessageToDisplayPartOne = `YOUR ${stats.baseStats.attackName} MISSED THE ${stats.baseStats.enemyName}`;
      stats.baseStats.battleMessageToDisplayPartTwo = '';
      stats.baseStats.battleMessageToDisplayPartThree = '';
      stats.baseStats.enemyTurn = true;
    }
  }
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battle';
}
function setButtons() {
  stats.baseStats.dButton = 'D: BACK';
  stats.baseStats.rButton = '';
  stats.baseStats.gButton = 'G: CONFIRM';
  stats.baseStats.vButton = '';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBattleAttackConfirm();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleMenu,
  g: confirmChoice,
};
