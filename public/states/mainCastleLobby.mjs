import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var mainCastleLobby = new Image();
var mainCastleLobbyHeight = 850;
var mainCastleLobbyWidth = 820;
var mainCastleLobbyX = -80;
var mainCastleLobbyY = -55;
var mainCastleLobbySpriteX = 0;
var mainCastleLobbySpriteY = 0;
var mainCastleLobbySpriteWidth = 570;
var mainCastleLobbySpriteHeight = 597;

// var availableTalk = false;
// var availableChest = false;
function mainRight() {
  if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX + 1
    ] === 0
  ) {
    stats.baseStats.heroMainCastleLobbyMapLocationX += 1;
    stats.functions.faceRight();
    mainCastleLobbyX -= 20;
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX + 1
    ] === 2
  ) {
    states.currentState = 'main';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX + 1
    ] === 3
  ) {
    states.currentState = 'mainCastleThrone';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX + 1
    ] === 4
  ) {
    states.currentState = 'mainCastleSpecialRoomMap';
  }
}
function mainLeft() {
  if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX - 1
    ] === 0
  ) {
    stats.baseStats.heroMainCastleLobbyMapLocationX -= 1;
    stats.functions.faceLeft();
    mainCastleLobbyX += 20;
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX - 1
    ] === 2
  ) {
    states.currentState = 'main';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX - 1
    ] === 3
  ) {
    states.currentState = 'mainCastleThrone';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY][
      stats.baseStats.heroMainCastleLobbyMapLocationX - 1
    ] === 4
  ) {
    states.currentState = 'mainCastleSpecialRoomMap';
  }
}
function mainUp() {
  if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY - 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainCastleLobbyMapLocationY -= 1;
    stats.functions.faceUp();
    mainCastleLobbyY += 20;
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY - 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 2
  ) {
    states.currentState = 'main';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY - 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 3
  ) {
    states.currentState = 'mainCastleThrone';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY - 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 4
  ) {
    states.currentState = 'mainCastleSpecialRoomMap';
  }
}
function mainDown() {
  if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY + 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainCastleLobbyMapLocationY += 1;
    stats.functions.faceDown();
    mainCastleLobbyY -= 20;
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY + 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 2
  ) {
    states.currentState = 'main';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY + 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 3
  ) {
    states.currentState = 'mainCastleThrone';
  } else if (
    stats.mainCastleLobbyMap[stats.baseStats.heroMainCastleLobbyMapLocationY + 1][
      stats.baseStats.heroMainCastleLobbyMapLocationX
    ] === 4
  ) {
    states.currentState = 'mainCastleSpecialRoomMap';
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

function drawMainCastleLobby() {
  mainCastleLobby.src = './sprites/mainCastleLobby.png';
  ctx.drawImage(
    mainCastleLobby,
    mainCastleLobbySpriteX,
    mainCastleLobbySpriteY,
    mainCastleLobbySpriteWidth,
    mainCastleLobbySpriteHeight,
    mainCastleLobbyX,
    mainCastleLobbyY,
    mainCastleLobbyWidth,
    mainCastleLobbyHeight
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
    drawMainCastleLobby();
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
