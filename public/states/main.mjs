import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var hero = new Image();
var heroHeight = 20;
var heroWidth = 20;
var heroX = (canvas.width - heroWidth) / 2;
var heroY = (canvas.height - heroHeight) / 2;
var heroSpriteX = 4;
var heroSpriteY = 4;
var heroSpriteWidth = 15;
var heroSpriteHeight = 15;
var villager = new Image();
var villagerHeight = 20;
var villagerWidth = 20;
var villagerX = 20;
var villagerY = 20;
var villagerSpriteX = 3;
var villagerSpriteY = 165;
var villagerSpriteWidth = 17;
var villagerSpriteHeight = 17;
var mainMap = new Image();
var mainMapHeight = 2700;
var mainMapWidth = 2720;
var mainMapX = 0;
var mainMapY = 0;
var mainMapSpriteX = 0;
var mainMapSpriteY = 0;
var mainMapSpriteWidth = 2176;
var mainMapSpriteHeight = 2160;
var shopWorker = new Image();
var shopWorkerHeight = 20;
var shopWorkerWidth = 20;
var shopWorkerX = 40;
var shopWorkerY = 40;
var shopWorkerSpriteX = 4;
var shopWorkerSpriteY = 203;
var shopWorkerSpriteWidth = 16;
var shopWorkerSpriteHeight = 15;
var soldier = new Image();
var soldierHeight = 20;
var soldierWidth = 20;
var soldierX = 60;
var soldierY = 60;
var soldierSpriteX = 4;
var soldierSpriteY = 130;
var soldierSpriteWidth = 16;
var soldierSpriteHeight = 15;
// var grass = new Image();
// var grassHeight = 20;
// var grassWidth = 20;
// var grassSpriteX = 400;
// var grassSpriteY = 400;
// var grassSpriteWidth = 15;
// var grassSpriteHeight = 15;
// var water = new Image();
// var waterHeight = 20;
// var waterWidth = 20;
// var waterSpriteX = 4;
// var waterSpriteY = 4;
// var waterSpriteWidth = 15;
// var waterSpriteHeight = 15;
// var heroPosition = stats.mainMap[(15, 15)];

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
    heroSpriteX = 94;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
    mainMapX -= 20;
    startBattle();
    stepCounter();
  }
}
function mainLeft() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY][
      stats.baseStats.heroMainMapLocationX - 1
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationX -= 1;
    heroSpriteX = 34;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
    mainMapX += 20;
    startBattle();
    stepCounter();
  }
}
function mainUp() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY - 1][
      stats.baseStats.heroMainMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationY -= 1;
    heroSpriteX = 62;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
    mainMapY += 20;
    startBattle();
    stepCounter();
  }
}
function mainDown() {
  if (
    stats.mainMap[stats.baseStats.heroMainMapLocationY + 1][
      stats.baseStats.heroMainMapLocationX
    ] === 0
  ) {
    stats.baseStats.heroMainMapLocationY += 1;
    heroSpriteX = 4;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
    mainMapY -= 20;
    startBattle();
    stepCounter();
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
// function openTalkState() {
//   if ((availableTalk = true)) {
//     states.currentState = 'talk';
//   } else {
//     ctx.font = 'bold 14px Arial';
//     ctx.fillStyle = '#000000';
//     ctx.fillText('THERE IS NO ONE TO TALK TO', canvas.width * 0.05, canvas.height * 0.9);
//   }
// }
function openCharState() {
  states.currentState = 'char';
}

function drawHero() {
  hero.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    hero,
    heroSpriteX,
    heroSpriteY,
    heroSpriteWidth,
    heroSpriteHeight,
    heroX,
    heroY,
    heroWidth,
    heroHeight
  );
}
function drawVillager() {
  villager.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    villager,
    villagerSpriteX,
    villagerSpriteY,
    villagerSpriteWidth,
    villagerSpriteHeight,
    villagerX,
    villagerY,
    villagerWidth,
    villagerHeight
  );
}
function drawshopWorker() {
  shopWorker.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    shopWorker,
    shopWorkerSpriteX,
    shopWorkerSpriteY,
    shopWorkerSpriteWidth,
    shopWorkerSpriteHeight,
    shopWorkerX,
    shopWorkerY,
    shopWorkerWidth,
    shopWorkerHeight
  );
}
function drawsoldier() {
  soldier.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    soldier,
    soldierSpriteX,
    soldierSpriteY,
    soldierSpriteWidth,
    soldierSpriteHeight,
    soldierX,
    soldierY,
    soldierWidth,
    soldierHeight
  );
}
function drawHp() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'HP: ' + stats.baseStats.currentHp + '/' + stats.baseStats.maxHp,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY
  );
}

function drawMp() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'MP: ' + stats.baseStats.currentMp + ' / ' + stats.baseStats.maxMp,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 2
  );
}

function drawGold() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'Gold: ' + stats.baseStats.gold,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 3
  );
}

function drawLvl() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'LVL: ' + stats.baseStats.lvl,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 4
  );
}

function drawNextLevel() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'NEXT LEVEL: ' + stats.baseStats.nextLevel,
    stats.locations.mainGeneralStartingX,
    stats.locations.mainGeneralStartingY * 5
  );
}

function drawRepelStepsRemaining() {
  if (stats.baseStats.repelSteps > 0) {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
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
    ctx.fillStyle = '#000000';
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
  // for (
  //   let row = stats.baseStats.heroMainMapLocationY - 10;
  //   row < stats.baseStats.heroMainMapLocationY + 11;
  //   row++
  // ) {
  //   for (
  //     let col = stats.baseStats.heroMainMapLocationX - 10;
  //     col < stats.baseStats.heroMainMapLocationX + 11;
  //     col++
  //   ) {
  // if (stats.mainMap[row][col] === 1) {
  //   water.src = './sprites/NESDragonWarriorOverworld.png';
  //   ctx.drawImage(
  //     water,
  //     waterSpriteX,
  //     waterSpriteY,
  //     waterSpriteWidth,
  //     waterSpriteHeight,
  //     (col - (stats.baseStats.heroMainMapLocationX - 10)) * 20,
  //     (row - (stats.baseStats.heroMainMapLocationY - 10)) * 20,
  //     waterWidth,
  //     waterHeight
  //   );
  // } else if (stats.mainMap[row][col] === 0) {
  //   grass.src = './sprites/NESDragonWarriorOverworld.png';
  //   ctx.drawImage(
  //     grass,
  //     grassSpriteX,
  //     grassSpriteY,
  //     grassSpriteWidth,
  //     grassSpriteHeight,
  //     (col - (stats.baseStats.heroMainMapLocationX - 10)) * 20,
  //     (row - (stats.baseStats.heroMainMapLocationY - 10)) * 20,
  //     grassWidth,
  //     grassHeight
  //   );
  //}
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
    drawHero();
    drawVillager();
    drawshopWorker();
    drawsoldier();
    drawHp();
    drawMp();
    drawGold();
    drawLvl();
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
