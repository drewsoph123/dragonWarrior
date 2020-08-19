import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function displayBattleItemsText() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('HEALTH POTIONS: ' + stats.healthPotions, canvas.width - 180, 45);
  ctx.fillText('MANA POTIONS: ' + stats.manaPotions, canvas.width - 180, 60);
  ctx.fillText('ANTIDOTES: ' + stats.antidotes, canvas.width - 180, 75);
  ctx.fillText('INCENSES: ' + stats.incenses, canvas.width - 180, 90);
  ctx.fillText('REPELS: ' + stats.repels, canvas.width - 180, 105);
  ctx.fillText('KEYS: ' + stats.keys, canvas.width - 180, 120);
  ctx.fillText('D: BACK', canvas.width - 450, canvas.height - 60);
  ctx.fillText('G: USE', canvas.width - 350, canvas.height - 60);
}

function mainUp() {
  if (stats.selectBoxY > stats.distanceBetweenStuff) {
    stats.selectBoxY -= stats.distanceBetweenStuff;
  }
}
function mainDown() {
  if (stats.selectBoxY < stats.totalItems * stats.distanceBetweenStuff) {
    stats.selectBoxY += stats.distanceBetweenStuff;
  }
}
function openBattleState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battle';
}
function openBattleItemConfirmState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'battleItemConfirm';
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
