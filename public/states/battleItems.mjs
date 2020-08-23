import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItems() {
  const availableItems = stats.items.filter((item) => {
    if (item.mainOnly == false && item.quantity > 0) {
      return true;
    }
  });
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  availableItems.forEach((item, index) => {
    ctx.fillText(
      `${item.name}S: ${item.quantity} // ${item.description}`,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * (index + 1)
    );
  });
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
function openBattleState() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  stats.baseStats.availableItemSelected = 0;
  states.currentState = 'battle';
}
function openBattleItemConfirmState() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battleItemConfirm';
}
function setButtons() {
  stats.baseStats.dButton = 'D: BACK';
  stats.baseStats.rButton = '';
  stats.baseStats.gButton = 'G: USE ITEM';
  stats.baseStats.vButton = '';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawItems();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleState,
  g: openBattleItemConfirmState,
};
