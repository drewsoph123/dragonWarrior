import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function displayBattleItemsText() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('HEALTH POTIONS: ' + stats.healthPotions, stats.baseStats.distanceBetweenStuffX, 45);
  ctx.fillText('MANA POTIONS: ' + stats.manaPotions, stats.baseStats.distanceBetweenStuffX, 60);
  ctx.fillText('ANTIDOTES: ' + stats.antidotes, stats.baseStats.distanceBetweenStuffX, 75);
  ctx.fillText('INCENSES: ' + stats.incenses, stats.baseStats.distanceBetweenStuffX, 90);
  ctx.fillText('REPELS: ' + stats.repels, stats.baseStats.distanceBetweenStuffX, 105);
  ctx.fillText('KEYS: ' + stats.keys, stats.baseStats.distanceBetweenStuffX, 120);
  ctx.fillText('D: BACK', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: USE', canvas.width * 0.25, canvas.height * 0.9);
}

function mainUp() {
  if (stats.baseStats.selectBoxY > stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY -= stats.baseStats.distanceBetweenStuffY;
  }
}
function mainDown() {
  if (stats.baseStats.selectBoxY < stats.totalItems * stats.baseStats.distanceBetweenStuffY) {
    stats.baseStats.selectBoxY += stats.baseStats.distanceBetweenStuffY;
  }
}
function openBattleState() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battle';
}
function openBattleItemConfirmState() {
  stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY;
  states.currentState = 'battleItemConfirm';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayBattleItemsText();
  },
  up: mainUp,
  down: mainDown,
  d: openBattleState,
  g: openBattleItemConfirmState,

  // const availableItems = [
  //     'healthPotions',
  //     'manaPotions',
  //     'antidotes',
  //     'inceses',
  //     'repels',
  //     'keys',
  // ];
};
