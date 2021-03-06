import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawSkillConfirm() {
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
    stats.baseStats.distanceBetweenStuffY * 2 - stats.baseStats.selectBoxStartingY;
}
function makeSelection() {
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
    availableSkills[stats.baseStats.availableSkillSelected].use();
    stats.baseStats.availableSkillSelected = 0;
    states.currentState = 'skills';
  }
}
function openSkillsMenu() {
  stats.baseStats.selectBoxY = stats.baseStats.selectBoxStartingY;
  stats.baseStats.availableSkillSelected = 0;
  states.currentState = 'skills';
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
    drawSkillConfirm();
    setButtons();
    stats.functions.drawButtons();
    stats.functions.drawBox();
  },

  up: mainUp,
  down: mainDown,
  d: openSkillsMenu,
  g: makeSelection,
};
