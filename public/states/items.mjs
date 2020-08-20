import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItems() {
  const availableItems = stats.items.filter((item) => item.quantity);
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  availableItems.forEach((item, index) => {
    ctx.fillText(
      `${item.name}: ${item.quantity}`,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * (index + 1)
    );
  });
}

function drawButtons() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('D: BACK', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: USE ITEM', canvas.width * 0.25, canvas.height * 0.9);
}

function mainUp() {
  if (stats.baseStats.selectBoxY > stats.baseStats.distanceBetweenStuffY / 2) {
    stats.baseStats.selectBoxY -= stats.baseStats.distanceBetweenStuffY;
    stats.baseStats.availableItemSelected -= 1;
  }
}
function mainDown() {
  const availableItems = stats.items.filter((item) => item.quantity);
  if (
    stats.baseStats.selectBoxY <
    availableItems.length * stats.baseStats.distanceBetweenStuffY - canvas.height * 0.05
  ) {
    stats.baseStats.selectBoxY += stats.baseStats.distanceBetweenStuffY;
    stats.baseStats.availableItemSelected += 1;
  }
}
function openMainState() {
  stats.baseStats.selectBoxY = canvas.height * 0.05;
  stats.baseStats.availableItemSelected = 0;
  states.currentState = 'main';
}
function openItemConfirmState() {
  stats.baseStats.selectBoxY = canvas.height * 0.05;
  states.currentState = 'itemConfirm';
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
    drawItems();
    drawButtons();
    drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openMainState,
  g: openItemConfirmState,
};
