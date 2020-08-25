import expTable from './expTable.mjs';

var canvas = document.getElementById('myCanvas');

const baseStats = {
  heroMainMapLocationX: 56,
  heroMainMapLocationY: 56,
  heroMainCastleThroneMapLocationX: 5,
  heroMainCastleThroneMapLocationY: 6,
  heroMainCastleLobbyMapLocationX: 7,
  heroMainCastleLobbyMapLocationY: 8,
  selectBoxHeight: canvas.height * 0.08,
  selectBoxWidth: canvas.width * 0.45,
  selectBoxStartingY: canvas.height * 0.05,
  selectBoxY: canvas.height * 0.05,
  selectBoxX: canvas.width * 0.05,
  damageDealt: 0,
  distanceBetweenStuffX: canvas.width * 0.1,
  distanceBetweenStuffY: canvas.height * 0.1,
  exp: 0,
  setLevelByExperience,
  currentLevel: 1,
  newLevel: 1,
  heroSleep: false,
  enemySleep: false,
  heroStopSpell: false,
  enemyStopSpell: false,
  dButton: 'D: SKILLS',
  rButton: 'R: ITEMS',
  gButton: 'G: TALK',
  vButton: 'V: CHAR',
  battleMessageToDisplayPartOne: 'test',
  battleMessageToDisplayPartTwo: 'test',
  battleMessageToDisplayPartThree: 'test',
  battleMessage: 'test',
  diedMessage: false,
  battleResultsUpdate: 'false',
  lvlUpMessage: 'false',
  currentWeapon: 'STICK',
  currentArmor: 'CLOTHES',
  currentShield: 'LEATHER SHIELD',
  repelEffect: 0,
  incenseEffect: 0,
  repelSteps: 0,
  incenseSteps: 0,
  availableItemSelected: 0,
  availableSkillSelected: 0,
  currentMp: 4,
  gold: 0,
  critRate: 50,
  critDamage: 100,
  accuracy: 0.75,
  resist: 0.25,
  status: 'healthy',
  battleOdds: 0.05,
  totalSkills: 0,
  totalItems: 0,
  chest: false,
  itemDamage: 0,
  currentHp: 10,
  attackName: 'none',
  availableTalk: false,
  availableChest: false,
  enemyTurn: false,
  enemyPresent: false,
  enemyName: 'none',
  enemyAttackType: 'none',
  enemyAttackDamage: 0,
  enemySpeed: 0,
  enemyExperience: 0,
  enemyGold: 0,
  baseDamage: 5,
  hero: new Image(),
  heroHeight: 20,
  heroWidth: 20,
  heroX: (canvas.width - 20) / 2,
  heroY: (canvas.height - 20) / 2,
  heroSpriteX: 4,
  heroSpriteY: 4,
  heroSpriteWidth: 15,
  heroSpriteHeight: 15,
};
setLevelByExperience();
export default baseStats;

function setLevelByExperience() {
  for (let i = 0; i - expTable.experienceLevels.length; i++) {
    if (baseStats.exp < expTable.experienceLevels[i]) {
      baseStats.lvl = i;
      baseStats.nextLevel = expTable.experienceLevels[i] - baseStats.exp;
      baseStats.maxHp = baseStats.lvl * 7 + 3;
      baseStats.maxMp = baseStats.lvl * 4;
      baseStats.baseDamage = baseStats.lvl * 4 + 1;
      baseStats.def = baseStats.lvl * 4;
      baseStats.speed = baseStats.lvl + 4;
      return;
    }
  }
  baseStats.lvl = expTable.experienceLevels.length;
  baseStats.nextLevel = 0;
}
