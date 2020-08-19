import stats from '../universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function useHealthPotions() {
  if (stats.currentHp < maxHp) {
    Math.min((stats.currentHp += 25), maxHp);
    stats.healthPotions -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX HEALTH ALREADY!', canvas.width - 180, 45);
  }
}

function useManaPotions() {
  if (stats.currentMp < maxMp) {
    Math.min((stats.currentMp += 25), maxMp);
    stats.manaPotions -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX MANA ALREADY!', canvas.width - 180, 45);
  }
}

function useAntidotes() {
  if ((stats.status = poisoned)) {
    stats.status = healthy;
    stats.antidotes -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU ARE NOT POISONED!', canvas.width - 180, 45);
  }
}

function useIncense() {
  stats.battleOdds += 0.2;
}

function useRepel() {
  stats.battleOdds -= 0.2;
}

function useKey() {
  if ((chest = true)) {
    openChest();
    stats.keys -= 1;
  }
}
