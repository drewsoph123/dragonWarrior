var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
import baseStats from './baseStats.mjs';

exports.items = [
  { name: 'healthPotions', quantity: 10, useHealthPotions },
  { name: 'manaPotions', quantity: 10, useManaPotions },
  { name: 'antidotes', quantity: 0, useAntidotes },
  { name: 'inceses', quantity: 10, useIncense },
  { name: 'repels', quantity: 10, useRepel },
  { name: 'keys', quantity: 10, useKey },
];

function useHealthPotions() {
  if (baseStats.currentHp < baseStats.maxHp) {
    Math.min((baseStats.currentHp += 25), baseStats.maxHp);
    baseStats.healthPotions -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX HEALTH ALREADY!', canvas.width - 180, 45);
  }
}

function useManaPotions() {
  if (baseStats.currentMp < baseStats.maxMp) {
    Math.min((baseStats.currentMp += 25), baseStats.maxMp);
    baseStats.manaPotions -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX MANA ALREADY!', canvas.width - 180, 45);
  }
}

function useAntidotes() {
  if ((baseStats.status = poisoned)) {
    baseStats.status = healthy;
    baseStats.antidotes -= 1;
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU ARE NOT POISONED!', canvas.width - 180, 45);
  }
}

function useIncense() {
  baseStats.battleOdds += 0.2;
}

function useRepel() {
  baseStats.battleOdds -= 0.2;
}

function useKey() {
  if ((chest = true)) {
    openChest();
    baseStats.keys -= 1;
  }
}
