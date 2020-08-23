var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
import baseStats from './baseStats.mjs';

// prettier-ignore
export const items = [
  { name: 'HEALTH POTION', battleDescription: 'HEALED 25 HP', description: 'HEAL 25 HP', quantity: 10, mainOnly: false, use: useHealthPotions },
  { name: 'MANA POTION', battleDescription: 'RECOVERED 25 MP', description: 'RECOVER 25 MP', quantity: 10, mainOnly: false, use: useManaPotions },
  { name: 'ANTIDOTE', battleDescription: 'ARE NO LONGER POISONED', description: 'REMOVE POISON', quantity: 0, mainOnly: false, use: useAntidotes },
  { name: 'INCENSE', description: 'INCREASE BATTLE ODDS', quantity: 10, mainOnly: true, use: useIncense },
  { name: 'REPEL', description: 'DESCREASE BATTLE ODDS', quantity: 10, mainOnly: true, use: useRepel },
  // { name: 'keys', quantity: 10, useKey },
];

function useHealthPotions() {
  if (baseStats.currentHp < baseStats.maxHp) {
    const availableItems = items.filter((item) => item.quantity);
    availableItems[baseStats.availableItemSelected].quantity -= 1;
    baseStats.currentHp = Math.min(baseStats.currentHp + 25, baseStats.maxHp);
  } else {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      'UNABLE TO USE, YOU HAVE MAX HEALTH ALREADY!',
      baseStats.distanceBetweenStuffX,
      45
    );
  }
}

function useManaPotions() {
  if (baseStats.currentMp < baseStats.maxMp) {
    const availableItems = items.filter((item) => item.quantity);
    availableItems[baseStats.availableItemSelected].quantity -= 1;
    Math.min((baseStats.currentMp += 25), baseStats.maxMp);
    baseStats.manaPotions -= 1;
  } else {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX MANA ALREADY!', baseStats.distanceBetweenStuffX, 45);
  }
}

function useAntidotes() {
  if ((baseStats.status = baseStats.poisoned)) {
    const availableItems = items.filter((item) => item.quantity);
    availableItems[baseStats.availableItemSelected].quantity -= 1;
    baseStats.status = baseStats.healthy;
    baseStats.antidotes -= 1;
  } else {
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('UNABLE TO USE, YOU ARE NOT POISONED!', baseStats.distanceBetweenStuffX, 45);
  }
}

function useIncense() {
  const availableItems = items.filter((item) => item.quantity);
  availableItems[baseStats.availableItemSelected].quantity -= 1;
  baseStats.incenseEffect == 0.35;
  baseStats.incenseSteps += 50;
}

function useRepel() {
  const availableItems = items.filter((item) => item.quantity);
  availableItems[baseStats.availableItemSelected].quantity -= 1;
  baseStats.repelEffect == -0.1;
  baseStats.repelSteps += 50;
}

// function useKey() {
//   if ((baseStats.chest = true)) {
//     openChest();
//     baseStats.keys -= 1;
//   }
// }
// function openChest() {

// }
