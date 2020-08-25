import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var mainCastleThrone = new Image();
var mainCastleThroneHeight = 2700;
var mainCastleThroneWidth = 2720;
var mainCastleThroneX = 700;
var mainCastleThroneY = 0;
var mainCastleThroneSpriteX = 0;
var mainCastleThroneSpriteY = 0;
var mainCastleThroneSpriteWidth = 210;
var mainCastleThroneSpriteHeight = 210;

// var availableTalk = false;
// var availableChest = false;
function mainRight() {
  if (
    stats.mainCastleThrone[stats.baseStats.heroMainCastleThroneLocationY][
      stats.baseStats.heroMainCastleThroneLocationX + 1
    ] === 0
  ) {
    stats.baseStats.heroMainCastleThroneLocationX += 1;
    stats.baseStats.heroSpriteX = 94;
    stats.baseStats.heroSpriteY = 4;
    stats.baseStats.heroSpriteWidth = 15;
    stats.baseStats.heroSpriteHeight = 15;
    mainCastleThroneX -= 20;
  }
}
function mainLeft() {
  if (
    stats.mainCastleThrone[stats.baseStats.heroMainCastleThroneLocationY][
      stats.baseStats.heroMainCastleThroneLocationX - 1
    ] === 0
  ) {
    stats.baseStats.heroMainCastleThroneLocationX -= 1;
    stats.baseStats.heroSpriteX = 34;
    stats.baseStats.heroSpriteY = 4;
    stats.baseStats.heroSpriteWidth = 15;
    stats.baseStats.heroSpriteHeight = 15;
    mainCastleThroneX += 20;
  }
}
function mainUp() {
  if (
    stats.mainCastleThrone[stats.baseStats.heroMainCastleThroneLocationY - 1][
      stats.baseStats.heroMainCastleThroneLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainCastleThroneLocationY -= 1;
    stats.baseStats.heroSpriteX = 62;
    stats.baseStats.heroSpriteY = 4;
    stats.baseStats.heroSpriteWidth = 15;
    stats.baseStats.heroSpriteHeight = 15;
    mainCastleThroneY += 20;
  }
}
function mainDown() {
  if (
    stats.mainCastleThrone[stats.baseStats.heroMainCastleThroneLocationY + 1][
      stats.baseStats.heroMainCastleThroneLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainCastleThroneLocationY += 1;
    stats.baseStats.heroSpriteX = 4;
    stats.baseStats.heroSpriteY = 4;
    stats.baseStats.heroSpriteWidth = 15;
    stats.baseStats.heroSpriteHeight = 15;
    mainCastleThroneY -= 20;
  }
}
function openSkillState() {
  states.currentState = 'skills';
}
function openItemsState() {
  const availableItems = stats.items.filter((item) => item.quantity);
  if (availableItems.length) {
    states.currentState = 'items';
  }
}
function openCharState() {
  states.currentState = 'char';
}
function drawBoxAroundStats() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(5, 5, 125, 110);
}
function drawBoxAroundButtons() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(5, 335, 175, 80);
}
function drawHp() {
  ctx.font = 'bold 14px Arial';
  if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(
    'HP: ' + stats.baseStats.currentHp + '/' + stats.baseStats.maxHp,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY
  );
}

function drawMp() {
  ctx.font = 'bold 14px Arial';
  if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(
    'MP: ' + stats.baseStats.currentMp + ' / ' + stats.baseStats.maxMp,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 2
  );
}

function drawGold() {
  ctx.font = 'bold 14px Arial';
  if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(
    'GOLD: ' + stats.baseStats.gold,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 3
  );
}

function drawLvl() {
  ctx.font = 'bold 14px Arial';
  if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(
    'LVL: ' + stats.baseStats.lvl,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 4
  );
}

function drawNextLevel() {
  ctx.font = 'bold 14px Arial';
  if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(
    'NEXT LEVEL: ' + stats.baseStats.nextLevel,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 5
  );
}

function drawMainCastleThrone() {
  mainCastleThrone.src = './sprites/NESDragonWarriorTantegelCastle.png';
  ctx.drawImage(
    mainCastleThrone,
    mainCastleThroneSpriteX,
    mainCastleThroneSpriteY,
    mainCastleThroneSpriteWidth,
    mainCastleThroneSpriteHeight,
    mainCastleThroneX,
    mainCastleThroneY,
    mainCastleThroneWidth,
    mainCastleThroneHeight
  );
}
function setButtons() {
  stats.baseStats.dButton = 'D: SKILLS';
  stats.baseStats.rButton = 'R: ITEMS';
  stats.baseStats.gButton = 'G: TALK';
  stats.baseStats.vButton = 'V: CHAR';
}
export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMainCastleThrone();
    stats.functions.drawHero();
    drawBoxAroundStats();
    drawHp();
    drawMp();
    drawGold();
    drawLvl();
    drawBoxAroundButtons();
    drawNextLevel();
    setButtons();
    stats.functions.drawButtons();
  },
  right: mainRight,
  left: mainLeft,
  up: mainUp,
  down: mainDown,
  d: openSkillState,
  r: openItemsState,
  //g: openTalkState,
  v: openCharState,
};
