import stats from './universalVariables.mjs';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function useHeal() {
  if (stats.currentMp >= 4) {
    if (stats.currentHp < stats.maxHp) {
      Math.min((stats.currentHp += 15), stats.maxHp);
      stats.currentMp -= 4;
    }
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX HEALTH ALREADY!', canvas.width - 180, 45);
  }
}

function useHurt() {
  if ((state = battle)) {
    if (stats.currentMp >= 2) {
      if (Math.random() <= stats.accuracy) {
        damage = 10;
      } else {
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('YOU MISSED!', canvas.width - 180, 45);
      }
      stats.currentMp -= 2;
    }
  }
}
function useSleep() {
  if ((state = battle)) {
    if (stats.currentMp >= 2) {
      if (Math.random() <= stats.accuracy) {
        //Opponent Falls Asleep
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('OPPONENT FELL ASLEEP!', canvas.width - 180, 45);
      } else {
        //Opponent Spell Failed
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('YOU MISSED!', canvas.width - 180, 45);
      }
    }
  }
}

function useStopSpell() {
  if ((state = battle)) {
    if (stats.currentMp >= 2) {
      if (Math.random() <= stats.accuracy) {
        //Opponent Spells Stopped
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('OPPONENT Spells Blocked!', canvas.width - 180, 45);
      } else {
        //Spell Stop Failed
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('YOU MISSED!', canvas.width - 180, 45);
      }
    }
  }
}

function useHealMore() {
  if (stats.currentMp >= 10) {
    if (stats.currentHp < stats.maxHp) {
      Math.min((stats.currentHp += 85), stats.maxHp);
      stats.currentMp -= 10;
    }
  } else {
    ctx.font = '14px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('UNABLE TO USE, YOU HAVE MAX HEALTH ALREADY!', canvas.width - 180, 45);
  }
}

function useHurtMore() {
  if ((state = battle)) {
    if (stats.currentMp >= 5) {
      if (Math.random() <= stats.accuracy) {
        stats.damage = 60;
      } else {
        ctx.font = '14px Arial';
        ctx.fillStyle = '#0095DD';
        ctx.fillText('YOU MISSED!', canvas.width - 180, 45);
      }
      stats.currentMp -= 5;
    }
  }
}
