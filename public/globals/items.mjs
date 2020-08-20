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
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML = m + ':' + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = '0' + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = '59';
  }
  return sec;
}

function useIncense() {
  const availableItems = items.filter((item) => item.quantity);
  availableItems[baseStats.availableItemSelected].quantity -= 1;
  document.getElementById('timer').innerHTML = '005' + ':' + 0;
  startTimer();
  checkSecond();
  baseStats.battleOdds += 0.2;
}

function useRepel() {
  const availableItems = items.filter((item) => item.quantity);
  availableItems[baseStats.availableItemSelected].quantity -= 1;
  document.getElementById('timer').innerHTML = '005' + ':' + 0;
  startTimer();
  checkSecond();
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
