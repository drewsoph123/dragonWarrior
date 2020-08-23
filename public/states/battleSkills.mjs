import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function confirmSkillsAvailable() {
  const availableSkills = stats.skills.filter((skill) => {
    if (
      skill.mp <= stats.baseStats.currentMp &&
      skill.lvl <= stats.baseStats.lvl &&
      skill.battleOnly == false
    ) {
      return true;
    }
  });
  if (availableSkills == 0) {
    states.currentState = 'battle';
  }
}

function drawSkills() {
  const availableSkills = stats.skills.filter((skill) => {
    if (skill.mp <= stats.baseStats.currentMp && skill.lvl <= stats.baseStats.lvl) {
      return true;
    }
  });
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  availableSkills.forEach((skill, index) => {
    ctx.fillText(
      `${skill.name}: ${skill.mp} MP // ${skill.description}`,
      stats.baseStats.distanceBetweenStuffX,
      stats.baseStats.distanceBetweenStuffY * (index + 1)
    );
  });
}

function mainUp() {
  if (stats.baseStats.selectBoxY > stats.baseStats.selectBoxStartingY) {
    stats.baseStats.selectBoxY -= stats.baseStats.distanceBetweenStuffY;
    stats.baseStats.availableSkillSelected -= 1;
  }
}
function mainDown() {
  const availableSkills = stats.skills.filter((skill) => {
    if (skill.mp <= stats.baseStats.currentMp && skill.lvl <= stats.baseStats.lvl) {
      return true;
    }
  });
  if (
    stats.baseStats.selectBoxY <
    availableSkills.length * stats.baseStats.distanceBetweenStuffY -
      stats.baseStats.selectBoxStartingY
  ) {
    stats.baseStats.selectBoxY += stats.baseStats.distanceBetweenStuffY;
    stats.baseStats.availableSkillSelected += 1;
  }
}
function openBattleState() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  stats.baseStats.availableSkillSelected = 0;
  states.currentState = 'battle';
}
function openBattleSkillConfirmState() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  states.currentState = 'battleSkillConfirm';
}
function setButtons() {
  stats.baseStats.dButton = 'D: BACK';
  stats.baseStats.rButton = '';
  stats.baseStats.gButton = 'G: USE SKILL';
  stats.baseStats.vButton = '';
}

export default {
  run: function () {
    confirmSkillsAvailable();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSkills();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openBattleState,
  g: openBattleSkillConfirmState,
};
