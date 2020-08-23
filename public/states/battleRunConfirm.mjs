import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleRunConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('RUN', stats.baseStats.distanceBetweenStuffX, stats.baseStats.distanceBetweenStuffY);
  ctx.fillText(
    'CANCEL',
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
}

function mainUp() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
}
function mainDown() {
  stats.baseStats.selectBoxY =
    stats.baseStats.distanceBetweenStuffY + stats.baseStats.selectBoxStartingY;
}
function openBattleMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battle';
}
function confirmChoice() {
  if ((stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY)) {
    if (Math.random() < stats.baseStats.accuracy) {
      stats.baseStats.enemyPresent = false;
      states.currentState = 'main';
    } else {
      stats.baseStats.damageDealt = 0;
      stats.baseStats.battleMessageToDisplayPartOne = `UH OH, THE ${stats.baseStats.enemyName} IS TOO`;
      stats.baseStats.battleMessageToDisplayPartTwo = 'FAST AND CAUGHT YOU';
      stats.baseStats.battleMessageToDisplayPartThree = '';
      stats.baseStats.enemyTurn = true;
      states.currentState = 'battle';
    }
  }
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
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
    drawBattleRunConfirm();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleMenu,
  g: confirmChoice,
};
