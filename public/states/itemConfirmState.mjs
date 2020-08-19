import stats from '../globals/index.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItemConfirm() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('USE ITEM', canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('CANCEL', canvas.width - 180, stats.distanceBetweenStuff * 2);
}

function mainUp() {
  if (stats.selectBoxY != stats.distanceBetweenStuff) {
    stats.selectBoxY = stats.distanceBetweenStuff;
  }
}
function mainDown() {
  if (stats.selectBoxY != stats.distanceBetweenStuff * 2) {
    stats.selectBoxY = stats.distanceBetweenStuff * 2;
  }
}
function openItemsMenu() {
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'items';
}
function confirmChoice() {
  //not sure how to write this. Do highlighted selection.
  stats.selectBoxY = stats.distanceBetweenStuff;
  stats.currentState = 'items';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawItemConfirm();
  },

  up: mainUp,
  down: mainDown,
  d: openItemsMenu,
  g: confirmChoice,
};
