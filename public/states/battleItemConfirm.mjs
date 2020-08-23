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
function makeSelection() {
  if (stats.baseStats.selectBoxY == stats.baseStats.selectBoxStartingY) {
    const availableItems = stats.items.filter((item) => {
      if (item.mainOnly == false && item.quantity > 0) {
        return true;
      }
    });
    if (availableItems[stats.baseStats.availableItemSelected].name == 'HEALTH POTION') {
      if (stats.baseStats.currentHp < stats.baseStats.maxHp) {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU USED A ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = `AND HEALED ${Math.min(
          stats.baseStats.maxHp - stats.baseStats.currentHp,
          15
        )} HP`;
        stats.baseStats.battleMessageToDisplayPartThree = '';
        stats.baseStats.enemyTurn = true;
        availableItems[stats.baseStats.availableItemSelected].use();
        stats.baseStats.availableItemSelected = 0;
      } else {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU CANNOT USE THE ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = 'BECAUSE YOUR HEALTH IS FULL';
        stats.baseStats.battleMessageToDisplayPartThree = '';
      }
    } else if (availableItems[stats.baseStats.availableItemSelected].name == 'MANA POTION') {
      if (stats.baseStats.currentMp < stats.baseStats.maxMp) {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU USED A ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.messageToDisplayTwo = `AND HEALED ${
          (Math.min(stats.baseStats.maxMp - stats.baseStats.currentMp), 15)
        } MP`;
        stats.baseStats.enemyTurn = true;
        availableItems[stats.baseStats.availableItemSelected].use();
        stats.baseStats.availableItemSelected = 0;
      } else {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU CANNOT USE THE ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = 'BECAUSE YOUR MANA IS FULL';
        stats.baseStats.battleMessageToDisplayPartThree = '';
      }
    } else if (availableItems[stats.baseStats.availableItemSelected].name == 'ANTIDOTE') {
      if (stats.baseStats.status == 'poisoned') {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU USED A ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.messageToDisplayTwo = `AND ${
          stats.items[stats.baseStats.availableItemSelected].battleDescription
        }`;
        stats.baseStats.battleMessageToDisplayPartThree = '';
        stats.baseStats.enemyTurn = true;
        availableItems[stats.baseStats.availableItemSelected].use();
        stats.baseStats.availableItemSelected = 0;
      } else {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU CANNOT USE THE ${
          stats.items[stats.baseStats.availableItemSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = 'BECAUSE YOUR NOT POISONED';
        stats.baseStats.battleMessageToDisplayPartThree = '';
      }
    }
  }
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battle';
}
function openBattleItemsMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battleItems';
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
  d: openBattleItemsMenu,
  g: makeSelection,
};
