import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItemConfirm() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'USE ITEM',
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
  if (stats.baseStats.selectBoxY > stats.baseStats.distanceBetweenStuffY / 2) {
    stats.baseStats.selectBoxY = canvas.height * 0.05;
  }
}
function mainDown() {
  if (stats.baseStats.selectBoxY != stats.baseStats.distanceBetweenStuffY * 2) {
    stats.baseStats.selectBoxY = stats.baseStats.distanceBetweenStuffY * 2 - canvas.height * 0.05;
  }
}
function makeSelection() {
  if ((stats.baseStats.selectBoxY = canvas.height * 0.05)) {
    const availableItems = stats.items.filter((item) => item.quantity);
    availableItems[stats.baseStats.availableItemSelected].use();
    stats.baseStats.availableItemSelected = 0;
    states.currentState = 'items';
  }
}
function openItemsMenu() {
  stats.baseStats.selectBoxY = canvas.height * 0.05;
  states.currentState = 'items';
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

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawItemConfirm();
    drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openItemsMenu,
  g: makeSelection,
};
