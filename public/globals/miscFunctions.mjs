import baseStats from './baseStats.mjs';
import locations from './locations.mjs';
import states from '../states/index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
export const functions = {
  drawBox,
  drawButtons,
  enemyAttack,
  updateBattleMessage,
  drawHero,
  faceLeft,
  faceUp,
  faceDown,
  faceRight,
};

function drawBox() {
  ctx.beginPath();
  ctx.rect(
    baseStats.selectBoxX,
    baseStats.selectBoxY,
    baseStats.selectBoxWidth * 2,
    baseStats.selectBoxHeight
  );
  ctx.stroke();
  ctx.closePath();
}
function drawButtons() {
  ctx.font = 'bold 14px Arial';
  if (baseStats.currentHp < baseStats.maxHp * 0.2) {
    ctx.fillStyle = '#FF0000';
  } else {
    ctx.fillStyle = '#00FF00';
  }
  ctx.fillText(baseStats.dButton, locations.leftButtonX, locations.leftButtonY);
  ctx.fillText(baseStats.gButton, locations.rightButtonX, locations.rightButtonY);
  ctx.fillText(baseStats.rButton, locations.topButtonX, locations.topButtonY);
  ctx.fillText(baseStats.vButton, locations.bottomButtonX, locations.bottomButtonY);
}
function enemyAttack() {
  if (Math.random() >= baseStats.resist) {
    baseStats.currentHp -= baseStats.enemyAttackDamage;
    baseStats.battleMessageToDisplayPartOne = `THE ${baseStats.enemyName} ${baseStats.enemyAttackType}`;
    baseStats.battleMessageToDisplayPartTwo = `AND DID ${baseStats.enemyAttackDamage} DAMAGE`;
    if (baseStats.currentHp < 1 && baseStats.diedMessage == false) {
      baseStats.diedMessage = true;
      baseStats.battleMessageToDisplayPartThree = 'OH NO, YOU DIED!';
    }
  } else {
    baseStats.battleMessageToDisplayPartOne = `THE ${baseStats.enemyName}'S ${baseStats.enemyAttackType}`;
    baseStats.battleMessageToDisplayPartTwo = 'MISSED';
  }
}
function updateBattleMessage() {
  if (baseStats.diedMessage == true) {
    baseStats.currentHp = baseStats.maxHp;
    baseStats.currentMp = baseStats.maxMp;
    baseStats.gold = Math.round(baseStats.gold / 2);
    baseStats.heroMainMapLocationX = 15;
    baseStats.heroMainMapLocationY = 15;
    baseStats.enemyPresent = false;
    states.currentState = 'main';
    baseStats.diedMessage = false;
  }
  if (baseStats.enemyTurn == true) {
    functions.enemyAttack();
    baseStats.enemyTurn = false;
  } else if (baseStats.battleMessage == 1) {
    baseStats.battleMessage = 2;
    baseStats.battleMessageToDisplayPartOne = `THE ${baseStats.enemyName} WAS DEFEATED`;
    baseStats.battleMessageToDisplayPartTwo = '';
    baseStats.battleMessageToDisplayPartThree = '';
  } else if (baseStats.battleMessage == 2) {
    baseStats.battleMessage = 0;
    baseStats.battleMessageToDisplayPartOne = `YOU GOT ${baseStats.enemyExperience} EXPERIENCE`;
    baseStats.battleMessageToDisplayPartTwo = `YOU COLLECTED ${baseStats.enemyGold} GOLD`;
    baseStats.battleMessageToDisplayPartThree = '';
    baseStats.battleResultsUpdate = true;
  } else if (baseStats.battleResultsUpdate == true) {
    baseStats.exp += baseStats.enemyExperience;
    baseStats.gold += baseStats.enemyGold;
    baseStats.currentLevel = baseStats.lvl;
    baseStats.setLevelByExperience();
    baseStats.newLevel = baseStats.lvl;
    if (baseStats.currentLevel < baseStats.newLevel) {
      baseStats.battleMessageToDisplayPartOne = `YOU HAVE PROGRESSED FROM LEVEL ${baseStats.currentLevel}`;
      baseStats.battleMessageToDisplayPartTwo = `TO LEVEL ${baseStats.newLevel}`;
      baseStats.battleMessageToDisplayPartThree = 'CONGRATULATIONS';
      baseStats.currentHp = baseStats.maxHp;
      baseStats.currentMp = baseStats.maxMp;
    } else {
      baseStats.battleResultsUpdate = false;
      baseStats.enemyPresent = false;
      states.currentState = 'main';
    }
  }
}

function drawHero() {
  baseStats.hero.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    baseStats.hero,
    baseStats.heroSpriteX,
    baseStats.heroSpriteY,
    baseStats.heroSpriteWidth,
    baseStats.heroSpriteHeight,
    (canvas.width - baseStats.heroWidth) / 2,
    (canvas.height - baseStats.heroHeight) / 2,
    baseStats.heroWidth,
    baseStats.heroHeight
  );
}

function faceDown() {
  baseStats.heroSpriteX = 4;
  baseStats.heroSpriteY = 4;
  baseStats.heroSpriteWidth = 15;
  baseStats.heroSpriteHeight = 15;
}
function faceUp() {
  baseStats.heroSpriteX = 62;
  baseStats.heroSpriteY = 4;
  baseStats.heroSpriteWidth = 15;
  baseStats.heroSpriteHeight = 15;
}
function faceLeft() {
  baseStats.heroSpriteX = 34;
  baseStats.heroSpriteY = 4;
  baseStats.heroSpriteWidth = 15;
  baseStats.heroSpriteHeight = 15;
}
function faceRight() {
  baseStats.heroSpriteX = 94;
  baseStats.heroSpriteY = 4;
  baseStats.heroSpriteWidth = 15;
  baseStats.heroSpriteHeight = 15;
}
