import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItems() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(
    'HEALTH POTIONS: ' + stats.healthPotions,
    canvas.width - 180,
    stats.distanceBetweenStuff
  );
  ctx.fillText(
    'MANA POTIONS: ' + stats.manaPotions,
    canvas.width - 180,
    stats.distanceBetweenStuff * 2
  );
  ctx.fillText('ANTIDOTES: ' + stats.antidotes, canvas.width - 180, stats.distanceBetweenStuff * 3);
  ctx.fillText('INCENSES: ' + stats.incenses, canvas.width - 180, stats.distanceBetweenStuff * 4);
  ctx.fillText('REPELS: ' + stats.repels, canvas.width - 180, stats.distanceBetweenStuff * 5);
  ctx.fillText('KEYS: ' + stats.keys, canvas.width - 180, stats.distanceBetweenStuff * 6);
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
function openMainState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'main';
}
function openItemConfirmState() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'itemConfirm';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawItems();
  },

  up: mainUp,
  down: mainDown,
  d: openMainState,
  g: openItemConfirmState,

  // const availableItems = [
  //     'healthPotions',
  //     'manaPotions',
  //     'antidotes',
  //     'inceses',
  //     'repels',
  //     'keys',
  // ];
};
