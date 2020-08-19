import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawCharState() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Status: ' + stats.status, canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('HP: ' + stats.currentHp, canvas.width - 180, stats.distanceBetweenStuff * 2);
  ctx.fillText('MP: ' + stats.currentMp, canvas.width - 180, stats.distanceBetweenStuff * 3);
  ctx.fillText('DEF: ' + stats.def, canvas.width - 180, stats.distanceBetweenStuff * 4);
  ctx.fillText('SPEED: ' + stats.speed, canvas.width - 180, stats.distanceBetweenStuff * 5);
  ctx.fillText('CRIT RATE: ' + stats.critRate, canvas.width - 180, stats.distanceBetweenStuff * 6);
  ctx.fillText('CRIT DMG: ' + stats.critDamage, canvas.width - 90, stats.distanceBetweenStuff);
  ctx.fillText('ACCURACY: ' + stats.accuracy, canvas.width - 90, stats.distanceBetweenStuff * 2);
  ctx.fillText('RESIST: ' + stats.resist, canvas.width - 90, stats.distanceBetweenStuff * 3);
  ctx.fillText('LEVEL: ' + stats.lvl, canvas.width - 90, stats.distanceBetweenStuff * 4);
  ctx.fillText('EXP: ' + stats.exp, canvas.width - 90, stats.distanceBetweenStuff * 5);
  ctx.fillText('NEXT LEVEL: ' + stats.nextLevel, canvas.width - 90, stats.distanceBetweenStuff * 6);
  ctx.fillText('D: BACK', canvas.width - 450, canvas.height - 60);
  ctx.fillText('G: EQUIPMENT', canvas.width - 350, canvas.height - 60);
}

function openMainState() {
  stats.currentState = 'main';
}
function openEquipState() {
  stats.currentState = 'equip';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharState();
  },

  d: openMainState,
  g: openEquipState,
};
