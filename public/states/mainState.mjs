import stats from '../universalVariables.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var hero = new Image();
var heroHeight = 20;
var heroWidth = 20;
var heroX = (canvas.width - heroWidth) / 2;
var heroY = (canvas.height - heroHeight) / 2;
var spriteX = 4;
var spriteY = 4;
var spriteWidth = 15;
var spriteHeight = 15;
//var availableTalk = false;
//var chest = false;

stats.totalItems =
  stats.healthPotions +
  stats.manaPotions +
  stats.antidotes +
  stats.incenses +
  stats.repels +
  stats.keys;

function mainRight() {
  if (heroX + heroWidth < canvas.width) {
    heroX += heroWidth;
    spriteX = 94;
    spriteY = 4;
    spriteWidth = 15;
    spriteHeight = 15;
  }
}
function mainLeft() {
  if (heroX - heroWidth >= 0) {
    heroX -= heroWidth;
    spriteX = 34;
    spriteY = 4;
    spriteWidth = 15;
    spriteHeight = 15;
  }
}
function mainUp() {
  if (heroY - heroHeight >= 0) {
    heroY -= heroHeight;
    spriteX = 62;
    spriteY = 4;
    spriteWidth = 15;
    spriteHeight = 15;
  }
}
function mainDown() {
  if (heroY + heroHeight < canvas.height) {
    heroY += heroHeight;
    spriteX = 4;
    spriteY = 4;
    spriteWidth = 15;
    spriteHeight = 15;
  }
}
function openSkillState() {
  if (stats.lvl > 2) {
    stats.currentState = 'skills';
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('YOU HAVE NO SKILLS YET', canvas.width - 450, canvas.height - 60);
  }
}
function openItemsState() {
  if (stats.totalItems > 0) {
    stats.currentState = 'items';
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('YOU HAVE NO ITEMS', canvas.width - 450, canvas.height - 60);
  }
}
// function openTalkState() {
//   if ((availableTalk = true)) {
//     stats.currentState = 'talk';
//   } else {
//     ctx.font = '14px Arial';
//     ctx.fillStyle = '#0095DD';
//     ctx.fillText('THERE IS NO ONE TO TALK TO', canvas.width - 450, canvas.height - 60);
//   }
// }
function openCharState() {
  stats.currentState = 'char';
}

function drawHero() {
  hero.src = './sprites/NESDragonWarriorCharactersUSA.png';
  ctx.drawImage(
    hero,
    spriteX,
    spriteY,
    spriteWidth,
    spriteHeight,
    heroX,
    heroY,
    heroWidth,
    heroHeight
  );
}
function drawHp() {
  ctx.font = '10px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(
    'HP: ' + stats.currentHp + '/' + stats.maxHp,
    canvas.width - 450,
    canvas.height - 290
  );
}

function drawMp() {
  ctx.font = '10px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(
    'MP: ' + stats.currentMp + '/' + stats.maxMp,
    canvas.width - 450,
    canvas.height - 275
  );
}

function drawGold() {
  ctx.font = '10px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Gold: ' + stats.gold, canvas.width - 450, canvas.height - 260);
}

function drawLvl() {
  ctx.font = '10px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('LVL: ' + stats.lvl, canvas.width - 450, canvas.height - 245);
}

function drawNextLevel() {
  ctx.font = '10px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('NEXT LEVEL: ' + stats.nextLevel, canvas.width - 450, canvas.height - 230);
}

function drawButtons() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('D: SKILLS', canvas.width - 450, canvas.height - 60);
  ctx.fillText('G: TALK', canvas.width - 350, canvas.height - 60);
  ctx.fillText('R: ITEMS', canvas.width - 400, canvas.height - 90);
  ctx.fillText('V: CHAR', canvas.width - 400, canvas.height - 30);
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHero();
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
