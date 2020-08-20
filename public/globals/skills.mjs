var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

import baseStats from './baseStats.mjs';
export const skills = [
  { name: 'heal', useHeal },
  { name: 'hurt', useHurt },
  { name: 'sleep', useSleep },
  { name: 'stopSpell', useStopSpell },
  { name: 'healMore', useHealMore },
  { name: 'hurtMore', useHurtMore },
];

function useHeal() {
  if (baseStats.currentMp >= 4) {
    if (baseStats.currentHp < baseStats.maxHp) {
      Math.min((baseStats.currentHp += 15), baseStats.maxHp);
      baseStats.currentMp -= 4;
    }
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

function useHurt() {
  if (baseStats.currentMp >= 2) {
    if (Math.random() < baseStats.accuracy) {
      baseStats.damage = 10;
    } else {
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('YOU MISSED!', baseStats.distanceBetweenStuffX, 45);
    }
    baseStats.currentMp -= 2;
  }
}
function useSleep() {
  if (baseStats.currentMp >= 2) {
    if (Math.random() < baseStats.accuracy) {
      //Opponent Falls Asleep
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('OPPONENT FELL ASLEEP!', baseStats.distanceBetweenStuffX, 45);
    } else {
      //Opponent Spell Failed
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('YOU MISSED!', baseStats.distanceBetweenStuffX, 45);
    }
  }
}

function useStopSpell() {
  if (baseStats.currentMp >= 2) {
    if (Math.random() < baseStats.accuracy) {
      //Opponent Spells Stopped
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('OPPONENT Spells Blocked!', baseStats.distanceBetweenStuffX, 45);
    } else {
      //Spell Stop Failed
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('YOU MISSED!', baseStats.distanceBetweenStuffX, 45);
    }
  }
}

function useHealMore() {
  if (baseStats.currentMp >= 10) {
    if (baseStats.currentHp < baseStats.maxHp) {
      Math.min((baseStats.currentHp += 85), baseStats.maxHp);
      baseStats.currentMp -= 10;
    }
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

function useHurtMore() {
  if (baseStats.currentMp >= 5) {
    if (Math.random() < baseStats.accuracy) {
      baseStats.damage = 60;
    } else {
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText('YOU MISSED!', baseStats.distanceBetweenStuffX, 45);
    }
    baseStats.currentMp -= 5;
  }
}
