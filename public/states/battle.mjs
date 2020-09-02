import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var selectedEnemy = 0;
var enemyOdds = 0;
var enemy = new Image();
var enemyHeight = canvas.width * 0.5;
var enemyWidth = canvas.height * 0.5;
var enemyX = canvas.width * 0.25;
var enemyY = canvas.height * 0.15;
var enemySpriteX = 0;
var enemySpriteY = 0;
var enemySpriteWidth = 240;
var enemySpriteHeight = 320;

function determineEnemy() {
  if (stats.baseStats.enemyPresent == false) {
    (stats.baseStats.battleMessage = 0), (stats.baseStats.enemyPresent = true);
    selectedEnemy = Math.random();
    enemyOdds = 1 / stats.enemy.length;
    for (let i = 0; i - stats.enemy.length - 1; i++) {
      if (selectedEnemy < enemyOdds * (i + 1)) {
        stats.baseStats.enemyName = stats.enemy[i].name;
        stats.baseStats.enemyHp = stats.enemy[i].hp;
        stats.baseStats.enemyAttackDamage = stats.enemy[i].attackDamage;
        stats.baseStats.enemySpellDamage = stats.enemy[i].spellDamage;
        stats.baseStats.enemySpeed = stats.enemy[i].speed;
        stats.baseStats.enemyExperience = stats.enemy[i].experience;
        stats.baseStats.enemyGold = stats.enemy[i].gold;
        stats.baseStats.enemyAttackType = stats.enemy[i].attackType;
        stats.baseStats.enemySource = stats.enemy[i].source;
        stats.baseStats.battleMessageToDisplayPartOne = `UH OH, YOU CAME ACROSS A ${stats.baseStats.enemyName}`;
        stats.baseStats.battleMessageToDisplayPartTwo = 'AND HE WANTS TO FIGHT!';
        stats.baseStats.battleMessageToDisplayPartThree = '';
        if (stats.baseStats.enemySpeed > stats.baseStats.heroSpeed) {
          enemyAttack();
          stats.baseStats.battleMessageToDisplayPartOne = `UH OH, A ${stats.baseStats.enemyName} SNUCK`;
          stats.baseStats.battleMessageToDisplayPartTwo = `UP ON YOU AND DID ${stats.baseStats.enemyDamage} DAMAGE`;
          stats.baseStats.battleMessageToDisplayPartThree = '';
        }
        return;
      }
    }
  }
}
function enemyAttack() {
  if (Math.random() >= stats.baseStats.resist) {
    stats.baseStats.currentHp -= stats.baseStats.enemyAttackDamage;
    stats.baseStats.battleMessageToDisplayPartOne = `THE ${stats.baseStats.enemyName} ${stats.baseStats.enemyAttackType}`;
    stats.baseStats.battleMessageToDisplayPartTwo = `AND DID ${stats.baseStats.enemyAttackDamage} DAMAGE`;
    if (stats.baseStats.currentHp < 1) {
      stats.baseStats.battleMessageToDisplayPartThree = 'OH NO, YOU DIED!';
    }
  } else {
    stats.baseStats.battleMessageToDisplayPartOne = `THE ${stats.baseStats.enemyName}'S ${stats.baseStats.enemyAttackType}`;
    stats.baseStats.battleMessageToDisplayPartTwo = 'MISSED';
  }
}
function messageToDisplay() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    stats.baseStats.battleMessageToDisplayPartOne,
    stats.baseStats.distanceBetweenStuffX,
    canvas.height * 0.72
  );
  ctx.fillText(
    stats.baseStats.battleMessageToDisplayPartTwo,
    stats.baseStats.distanceBetweenStuffX,
    canvas.height * 0.75
  );
  ctx.fillText(
    stats.baseStats.battleMessageToDisplayPartThree,
    stats.baseStats.distanceBetweenStuffX,
    canvas.height * 0.78
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
function drawEnemy() {
  enemy.src = stats.baseStats.enemySource;
  ctx.drawImage(
    enemy,
    enemySpriteX,
    enemySpriteY,
    enemySpriteWidth,
    enemySpriteHeight,
    enemyX,
    enemyY,
    enemyWidth,
    enemyHeight
  );
}
function openBattleSkillsSelectState() {
  if (
    stats.baseStats.enemyTurn == true ||
    stats.baseStats.battleMessage != 0 ||
    stats.baseStats.battleResultsUpdate == true ||
    stats.baseStats.diedMessage == true
  ) {
    stats.functions.updateBattleMessage();
  } else {
    states.currentState = 'battleSkills';
  }
}
function openBattleItemsSelectState() {
  if (
    stats.baseStats.enemyTurn == true ||
    stats.baseStats.battleMessage != 0 ||
    stats.baseStats.battleResultsUpdate == true ||
    stats.baseStats.diedMessage == true
  ) {
    stats.functions.updateBattleMessage();
  } else {
    const availableItems = stats.items.filter((item) => item.quantity);
    if (availableItems.length) {
      states.currentState = 'battleItems';
    }
  }
}
function openBattleAttackConfirmState() {
  if (
    stats.baseStats.enemyTurn == true ||
    stats.baseStats.battleMessage != 0 ||
    stats.baseStats.battleResultsUpdate == true ||
    stats.baseStats.diedMessage == true
  ) {
    stats.functions.updateBattleMessage();
  } else {
    states.currentState = 'battleAttackConfirm';
  }
}
function openBattleRunConfirmState() {
  if (
    stats.baseStats.enemyTurn == true ||
    stats.baseStats.battleMessage != 0 ||
    stats.baseStats.battleResultsUpdate == true ||
    stats.baseStats.diedMessage == true
  ) {
    stats.functions.updateBattleMessage();
  } else {
    states.currentState = 'battleRunConfirm';
  }
}

function setButtons() {
  if (
    stats.baseStats.enemyTurn == true ||
    stats.baseStats.battleMessage != 0 ||
    stats.baseStats.battleResultsUpdate == true ||
    stats.baseStats.diedMessage == true
  ) {
    stats.baseStats.dButton = 'D: NEXT';
    stats.baseStats.rButton = 'R: NEXT';
    stats.baseStats.gButton = 'G: NEXT';
    stats.baseStats.vButton = 'V: NEXT';
  } else {
    stats.baseStats.dButton = 'D: SKILLS';
    stats.baseStats.rButton = 'R: ITEMS';
    stats.baseStats.gButton = 'G: ATTACK';
    stats.baseStats.vButton = 'V: RUN';
  }
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    determineEnemy();
    messageToDisplay();
    drawHp();
    drawMp();
    drawEnemy();
    setButtons();
    stats.functions.drawButtons();
  },

  d: openBattleSkillsSelectState,
  r: openBattleItemsSelectState,
  g: openBattleAttackConfirmState,
  v: openBattleRunConfirmState,
};
