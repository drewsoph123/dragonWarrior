import stats from '../globals/index.mjs';
import states from './index.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawEquipState() {
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(
    'WEAPON: ' + stats.weapon,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY
  );
  ctx.fillText(
    'SHIELD: ' + stats.shield,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 2
  );
  ctx.fillText(
    'ARMOR: ' + stats.armor,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 3
  );
  ctx.fillText(
    'HELMET: ' + stats.helmet,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 4
  );
  ctx.fillText(
    'GLOVES: ' + stats.gloves,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 5
  );
  ctx.fillText(
    'BOOTS: ' + stats.boots,
    stats.baseStats.distanceBetweenStuffX,
    stats.baseStats.distanceBetweenStuffY * 6
  );
  ctx.fillText('D: BACK', canvas.width * 0.05, canvas.height * 0.9);
}

function openCharState() {
  states.currentState = 'char';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEquipState();
  },

  d: openCharState,
};
