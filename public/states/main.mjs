import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var mainMap = new Image();
var mainMapHeight = 2700;
var mainMapWidth = 2720;
var mainMapX = -820;
var mainMapY = -820;
var mainMapSpriteX = 0;
var mainMapSpriteY = 0;
var mainMapSpriteWidth = 2176;
var mainMapSpriteHeight = 2160;

// var availableTalk = false;
// var availableChest = false;
function startBattle() {
  if (
    Math.random() <
    stats.baseStats.battleOdds + stats.baseStats.repelEffect + stats.baseStats.incenseEffect
  )
    states.currentState = 'battle';
}
function stepCounter() {
  if (stats.baseStats.incenseSteps > 0) {
    stats.baseStats.incenseSteps -= 1;
  } else if (stats.baseStats.repelSteps > 0) {
    stats.baseStats.repelSteps -= 1;
  } else {
    stats.baseStats.repelEffect = 0;
    stats.baseStats.incenseEffect = 0;
  }
}
function mainRight() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY][
      stats.baseStats.heroMainMapLocationX + 1
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationX += 1;
    stats.functions.faceRight();
    mainMapX -= 20;
    startBattle();
    stepCounter();
  } else if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY][
      stats.baseStats.heroMainMapLocationX + 1
    ] === 2
  ) {
    states.currentState = 'mainCastleLobby';
  }
}
function mainLeft() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY][
      stats.baseStats.heroMainMapLocationX - 1
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationX -= 1;
    stats.functions.faceLeft();
    mainMapX += 20;
    startBattle();
    stepCounter();
  } else if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY][
      stats.baseStats.heroMainMapLocationX - 1
    ] === 2
  ) {
    states.currentState = 'mainCastleLobby';
  }
}
function mainUp() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY - 1][
      stats.baseStats.heroMainMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationY -= 1;
    stats.functions.faceUp();
    mainMapY += 20;
    startBattle();
    stepCounter();
  } else if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY - 1][
      stats.baseStats.heroMainMapLocationX
    ] === 2
  ) {
    states.currentState = 'mainCastleLobby';
  }
}
function mainDown() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY + 1][
      stats.baseStats.heroMainMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationY += 1;
    stats.functions.faceDown();
    mainMapY -= 20;
    startBattle();
    stepCounter();
  } else if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY + 1][
      stats.baseStats.heroMainMapLocationX
    ] === 2
  ) {
    states.currentState = 'mainCastleLobby';
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

function drawRepelStepsRemaining() {
  if (stats.baseStats.repelSteps > 0) {
    ctx.font = 'bold 14px Arial';
    if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
      ctx.fillStyle = '#FF0000';
    } else {
      ctx.fillStyle = '#00FF00';
    }
    ctx.fillText(
      'REPEL STEPS: ' + stats.baseStats.repelSteps,
      canvas.width * 0.65,
      stats.locations.mainGeneralStartingY
    );
  }
}
function drawIncenseStepsRemaining() {
  if (stats.baseStats.incenseSteps > 0) {
    ctx.font = 'bold 14px Arial';
    if (stats.baseStats.currentHp < stats.baseStats.maxHp * 0.2) {
      ctx.fillStyle = '#FF0000';
    } else {
      ctx.fillStyle = '#00FF00';
    }
    ctx.fillText(
      'INCENSE STEPS: ' + stats.baseStats.incenseSteps,
      canvas.width * 0.65,
      stats.locations.mainGeneralStartingY * 2
    );
  }
}

function drawMainMap() {
  mainMap.src = './sprites/NESDragonWarriorOverworld.png';
  ctx.drawImage(
    mainMap,
    mainMapSpriteX,
    mainMapSpriteY,
    mainMapSpriteWidth,
    mainMapSpriteHeight,
    mainMapX,
    mainMapY,
    mainMapWidth,
    mainMapHeight
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
    drawMainMap();
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
    drawIncenseStepsRemaining();
    drawRepelStepsRemaining();
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
