import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBattleSkillConfirm() {
  const availableSkills = stats.skills.filter((skill) => {
    if (
      skill.mp <= stats.baseStats.currentMp &&
      skill.lvl <= stats.baseStats.lvl &&
      skill.battleOnly == false
    ) {
      return true;
    }
  });
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'USE ' + availableSkills[stats.baseStats.availableSkillSelected].name,
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
    stats.baseStats.distanceBetweenStuffY + stats.baseStats.selectBoxStartingY;
}
function openSkillsMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battleItemsSelect';
  stats.baseStats.availableSkillSelected = 0;
}
function confirmChoice() {
  if ((stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY)) {
    const availableSkills = stats.skills.filter((skill) => {
      if (
        skill.mp <= stats.baseStats.currentMp &&
        skill.lvl <= stats.baseStats.lvl &&
        skill.battleOnly == false
      ) {
        return true;
      }
    });
    if (availableSkills[stats.baseStats.availableSkillSelected].name.includes('HEAL')) {
      if (stats.baseStats.currentHp < stats.baseStats.maxHp) {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU CAST ${
          availableSkills[stats.baseStats.availableSkillSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = `AND HEALED ${Math.min(
          stats.baseStats.maxHp - stats.baseStats.currentHp,
          availableSkills[stats.baseStats.availableSkillSelected].healAmount
        )} HP`;
        stats.baseStats.battleMessageToDisplayPartThree = '';
        availableSkills[stats.baseStats.availableSkillSelected].use();
        if (stats.baseStats.enemyHp > 0) {
          stats.baseStats.enemyTurn = true;
        } else {
          stats.baseStats.battleMessageFirst = true;
        }
      } else {
        stats.baseStats.battleMessageToDisplayPartOne = `YOU CANNOT CAST ${
          availableSkills[stats.baseStats.availableSkillSelected].name
        }`;
        stats.baseStats.battleMessageToDisplayPartTwo = 'BECAUSE YOUR HP IS FULL';
        stats.baseStats.battleMessageToDisplayPartThree = '';
      }
    }
  }

  stats.baseStats.availableSkillSelected = 0;
  states.currentState = 'battle';
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
    drawBattleSkillConfirm();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openSkillsMenu,
  g: confirmChoice,
};
