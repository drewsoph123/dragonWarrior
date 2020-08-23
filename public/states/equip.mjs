import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawEquipState() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    `WEAPON: ${stats.baseStats.currentWeapon} - ${
      stats.equip.weapon[stats.baseStats.currentWeapon]
    } DAMAGE`,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY
  );
  ctx.fillText(
    `SHIELD: ${stats.baseStats.currentShield} - ${
      stats.equip.shield[stats.baseStats.currentShield]
    } DEFENSE`,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
  ctx.fillText(
    `ARMOR: ${stats.baseStats.currentArmor} - ${
      stats.equip.armor[stats.baseStats.currentArmor]
    } DEFENSE`,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 3
  );
}

function openCharState() {
  states.currentState = 'char';
}

function setButtons() {
  stats.baseStats.dButton = 'D: BACK';
  stats.baseStats.rButton = '';
  stats.baseStats.gButton = '';
  stats.baseStats.vButton = '';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEquipState();
    setButtons();
    stats.functions.drawButtons();
  },

  d: openCharState,
};
