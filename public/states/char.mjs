import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawCharState() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'Status: ' + stats.baseStats.status,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY
  );
  ctx.fillText(
    'HP: ' + stats.baseStats.currentHp,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
  ctx.fillText(
    'MP: ' + stats.baseStats.currentMp,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 3
  );
  ctx.fillText(
    'DEF: ' + stats.baseStats.def,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 4
  );
  ctx.fillText(
    'SPEED: ' + stats.baseStats.speed,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 5
  );
  ctx.fillText(
    'ATTACK: ' + stats.baseStats.damage + stats.equip[stats.equip.currentWeapon].damage,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 6
  );
  ctx.fillText(
    'CRIT RATE: ' + stats.baseStats.critRate,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 7
  );
  ctx.fillText(
    'CRIT DMG: ' + stats.baseStats.critDamage,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY
  );
  ctx.fillText(
    'ACCURACY: ' + stats.baseStats.accuracy,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY * 2
  );
  ctx.fillText(
    'RESIST: ' + stats.baseStats.resist,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY * 3
  );
  ctx.fillText(
    'LEVEL: ' + stats.baseStats.lvl,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY * 4
  );
  ctx.fillText(
    'EXP: ' + stats.baseStats.exp,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY * 5
  );
  ctx.fillText(
    'NEXT LEVEL: ' + stats.baseStats.nextLevel,
    stats.baseStats.distanceBetweenStuffX * 5,
    stats.baseStats.distanceBetweenStuffY * 6
  );
  ctx.fillText('D: BACK', canvas.width * 0.05, canvas.height * 0.9);
  ctx.fillText('G: EQUIPMENT', canvas.width * 0.25, canvas.height * 0.9);
}

function openMainState() {
  states.currentState = 'main';
}
function openEquipState() {
  states.currentState = 'equip';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharState();
  },

  d: openMainState,
  g: openEquipState,
};
