var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
import baseStats from './baseStats.mjs';

export const items = [
  { name: 'HEALTH POTIONS', quantity: 10, use: useHealthPotions },
  { name: 'MANA POTIONS', quantity: 10, use: useManaPotions },
  { name: 'ANTIDOTES', quantity: 0, use: useAntidotes },
  { name: 'INCENSES', quantity: 10, use: useIncense },
  { name: 'REPELS', quantity: 10, use: useRepel },
  // { name: 'keys', quantity: 10, useKey },
];

function useHealthPotions() {
  console.log('baseStats.currentHp ', baseStats.currentHp);
  console.log('baseStats.maxHp ', baseStats.maxHp);
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
  var endDate = new Date('Mar 15, 2021 12:00:00').getTime();

  var timer = setInterval(function () {
    let now = newDate().getTime();
    let t = endDate - now;

    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      document.getElementById('timer-days').innerHTML = days + "<span class='label'>DAY(S)</span>";

      document.getElementById('timer-hours').innerHTML =
        ('0' + hours).slice(-2) + "<span class='label'>HR(S)</span>";

      document.getElementById('timer-mins').innerHTML =
        ('0' + mins).slice(-2) + "<span class='label'>MIN(S)</span>";

      document.getElementById('timer-secs').innerHTML =
        ('0' + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
    } else {
      document.getElementById('timer').innerHTML = 'The countdown is over!';
    }
  }, 1000);
  baseStats.battleOdds += 0.2;
}

function useRepel() {
  const availableItems = items.filter((item) => item.quantity);
  availableItems[baseStats.availableItemSelected].quantity -= 1;
  baseStats.battleOdds -= 0.2;
}

// function useKey() {
//   if ((baseStats.chest = true)) {
//     openChest();
//     baseStats.keys -= 1;
//   }
// }
// function openChest() {

// }
