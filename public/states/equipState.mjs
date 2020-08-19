import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawEquipState() {
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('WEAPON: ' + stats.weapon, canvas.width - 180, stats.distanceBetweenStuff);
  ctx.fillText('SHIELD: ' + stats.shield, canvas.width - 180, stats.distanceBetweenStuff * 2);
  ctx.fillText('ARMOR: ' + stats.armor, canvas.width - 180, stats.distanceBetweenStuff * 3);
  ctx.fillText('HELMET: ' + stats.helmet, canvas.width - 180, stats.distanceBetweenStuff * 4);
  ctx.fillText('GLOVES: ' + stats.gloves, canvas.width - 180, stats.distanceBetweenStuff * 5);
  ctx.fillText('BOOTS: ' + stats.boots, canvas.width - 180, stats.distanceBetweenStuff * 6);
  ctx.fillText('D: BACK', canvas.width - 450, canvas.height - 60);
}

function openCharState() {
  stats.currentState = 'char';
}

export default {
  run: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEquipState();
  },

  d: openCharState,
};
