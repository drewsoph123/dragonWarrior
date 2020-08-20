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
var heroMainMapLocationX = 15;
var heroMainMapLocationY = 15;
var villager = new Image();
var villagerHeight = 20;
var villagerWidth = 20;
var villagerX = 20;
var villagerY = 20;
var villagerSpriteX = 3;
var villagerSpriteY = 165;
var villagerSpriteWidth = 17;
var villagerSpriteHeight = 17;
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
var grass = new Image();
var grassHeight = 20;
var grassWidth = 20;
var grassSpriteX = 400;
var grassSpriteY = 400;
var grassSpriteWidth = 15;
var grassSpriteHeight = 15;
var water = new Image();
var waterHeight = 20;
var waterWidth = 20;
var waterSpriteX = 4;
var waterSpriteY = 4;
var waterSpriteWidth = 15;
var waterSpriteHeight = 15;
//var heroPosition = stats.mainMap[(15, 15)];

//var availableTalk = false;
//var availableChest = false;

function mainRight() {
  if (stats.mainMap[heroMainMapLocationY][heroMainMapLocationX + 1] === 0) {
    heroMainMapLocationX += 1;
    heroSpriteX = 94;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
    if (Math.random() < 0.25) {
      states.currentState = 'battle';
    }
  }
}
function mainLeft() {
  if (stats.mainMap[heroMainMapLocationY][heroMainMapLocationX - 1] === 0) {
    heroMainMapLocationX -= 1;
    heroSpriteX = 34;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
  }
}
function mainUp() {
  if (stats.mainMap[heroMainMapLocationY - 1][heroMainMapLocationX] === 0) {
    heroMainMapLocationY -= 1;
    heroSpriteX = 62;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
  }
}
function mainDown() {
  if (stats.mainMap[heroMainMapLocationY + 1][heroMainMapLocationX] === 0) {
    heroMainMapLocationY += 1;
    heroSpriteX = 4;
    heroSpriteY = 4;
    heroSpriteWidth = 15;
    heroSpriteHeight = 15;
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
    canvas.width * 0.05,
    canvas.height * 0.05
  );
}

function drawMp() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'MP: ' + stats.baseStats.currentMp + ' / ' + stats.baseStats.maxMp,
    canvas.width * 0.05,
    canvas.height * 0.1
  );
}

function drawGold() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('Gold: ' + stats.baseStats.gold, canvas.width * 0.05, canvas.height * 0.15);
}

function drawLvl() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('LVL: ' + stats.baseStats.lvl, canvas.width * 0.05, canvas.height * 0.2);
}

function drawNextLevel() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'NEXT LEVEL: ' + stats.baseStats.nextLevel,
    canvas.width * 0.05,
    canvas.height * 0.25
  );
}

function drawButtons() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('D: SKILLS', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: TALK', canvas.width * 0.25, canvas.height * 0.9);
  ctx.fillText('R: ITEMS', canvas.width * 0.15, canvas.height * 0.85);
  ctx.fillText('V: CHAR', canvas.width * 0.15, canvas.height * 0.95);
}

function drawMainMap() {
  for (let row = heroMainMapLocationY - 10; row < heroMainMapLocationY + 11; row++) {
    for (let col = heroMainMapLocationX - 10; col < heroMainMapLocationX + 11; col++) {
      if (stats.mainMap[row][col] === 1) {
        water.src = './sprites/NESDragonWarriorOverworld.png';
        ctx.drawImage(
          water,
          waterSpriteX,
          waterSpriteY,
          waterSpriteWidth,
          waterSpriteHeight,
          (col - (heroMainMapLocationX - 10)) * 20,
          (row - (heroMainMapLocationY - 10)) * 20,
          waterWidth,
          waterHeight
        );
      } else if (stats.mainMap[row][col] === 0) {
        grass.src = './sprites/NESDragonWarriorOverworld.png';
        ctx.drawImage(
          grass,
          grassSpriteX,
          grassSpriteY,
          grassSpriteWidth,
          grassSpriteHeight,
          (col - (heroMainMapLocationX - 10)) * 20,
          (row - (heroMainMapLocationY - 10)) * 20,
          grassWidth,
          grassHeight
        );
      }
    }
  }
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
    drawButtons();
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
