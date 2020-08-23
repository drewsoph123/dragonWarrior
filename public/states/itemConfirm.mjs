import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawItemConfirm() {
  const availableItems = stats.items.filter((item) => item.quantity);

  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'USE ' + availableItems[stats.baseStats.availableItemSelected].name,
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
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
}
function mainDown() {
  stats.baseStats.selectBoxY =
    stats.baseStats.distanceBetweenStuffY * 2 - stats.baseStats.selectBoxStartingY;
}
function makeSelection() {
  if ((stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY)) {
    const availableItems = stats.items.filter((item) => item.quantity);
    availableItems[stats.baseStats.availableItemSelected].use();
    stats.baseStats.availableItemSelected = 0;
    states.currentState = 'items';
  }
}
function openItemsMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'items';
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
    drawItemConfirm();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openItemsMenu,
  g: makeSelection,
};
