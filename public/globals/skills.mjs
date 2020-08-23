import baseStats from './baseStats.mjs';
// prettier-ignore
export const skills = [
  { name: 'HEAL', mp: 4, lvl: 0, healAmount: 15, description: 'HEAL 15 HP', battleOnly: false, use: useHeal },
  { name: 'HURT', mp: 2, lvl: 3, battleDescription: 'DEALT 10 DAMAGE', description: 'DAMAGE ENEMY', battleOnly: true, use: useHurt },
  { name: 'SLEEP', mp: 2, lvl: 6, battleDescription: 'PUT THE ENEMY TO SLEEP', description: 'PUT ENEMY TO SLEEP', battleOnly: true, use: useSleep },
  { name: 'STOP SPELL', mp: 2, lvl: 9, battleDescription: 'STOPPED SPELLS', description: 'STOP ENEMY SPELLS', battleOnly: true, use: useStopSpell },
  { name: 'HEAL MORE', mp: 10, lvl: 16, healAmount: 85, description: 'HEAL 85 HP', battleOnly: false, use: useHealMore },
  { name: 'HURT MORE', mp: 5, lvl: 18, battleDescription: 'DEALT 60 DAMAGE', description: 'DAMAGE ENEMY', battleOnly: true, use: useHurtMore },
];

function useHeal() {
  if (baseStats.currentHp < baseStats.maxHp) {
    baseStats.currentHp = Math.min(baseStats.currentHp + 15, baseStats.maxHp);
    baseStats.currentMp -= 4;
  }
}

function useHurt() {
  if (Math.random() < baseStats.accuracy) {
    baseStats.damageDealt = 10;
    baseStats.battleMessageToDisplay = `HURT HIT ${baseStats.enemyName}`;
    baseStats.battleMessageToDisplayTwo = `AND DID ${baseStats.damageDealt} DAMAGE`;
  } else {
    baseStats.battleMessageToDisplay = 'HURT MISSED';
    baseStats.battleMessageToDisplayTwo = '';
  }
  baseStats.currentMp -= 2;
}
function useSleep() {
  if (Math.random() < baseStats.accuracy) {
    baseStats.enemySleep = true;
    baseStats.battleMessageToDisplay = `${baseStats.enemyName} FELL ASLEEP`;
    baseStats.battleMessageToDisplayTwo = '';
  } else {
    baseStats.battleMessageToDisplay = 'SLEEP MISSED';
    baseStats.battleMessageToDisplayTwo = '';
  }
  baseStats.currentMp -= 2;
}

function useStopSpell() {
  if (Math.random() < baseStats.accuracy) {
    baseStats.enemyStopSpell = true;
    baseStats.battleMessageToDisplay = `STOP SPELL LANDED ON ${baseStats.enemyName}`;
    baseStats.battleMessageToDisplayTwo = '';
  } else {
    baseStats.battleMessageToDisplay = 'STOP SPELL MISSED';
    baseStats.battleMessageToDisplayTwo = '';
  }
  baseStats.currentMp -= 2;
}

function useHealMore() {
  if (baseStats.currentHp < baseStats.maxHp) {
    baseStats.currentHp = Math.min((baseStats.currentHp += 85), baseStats.maxHp);
    baseStats.currentMp -= 10;
  }
}

function useHurtMore() {
  if (Math.random() < baseStats.accuracy) {
    baseStats.damageDealt = 60;
    baseStats.battleMessageToDisplay = `HURT MORE LANDED ON ${baseStats.enemyName}`;
    baseStats.battleMessageToDisplayTwo = 'AND DID 60 DAMAGE';
  } else {
    baseStats.battleMessageToDisplay = 'HURT MORE MISSED';
    baseStats.battleMessageToDisplayTwo = '';
  }
  baseStats.currentMp -= 5;
}
