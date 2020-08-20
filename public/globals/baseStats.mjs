var canvas = document.getElementById('myCanvas');

const lvl = 1;
const distanceBetweenStuffX = canvas.width * 0.1;
const distanceBetweenStuffY = canvas.height * 0.1;
const maxHp = lvl * 7 + 3;
const maxMp = lvl * 6;
const damage = lvl * 4 + 1;
const def = lvl * 4;
const speed = lvl + 4;
const selectBoxX = canvas.width * 0.05;
const selectBoxY = canvas.height * 0.05;
const selectBoxWidth = canvas.width * 0.45;
const selectBoxHeight = canvas.height * 0.08;

export default {
  availableItemSelected: 0,
  maxMp,
  currentMp: 6,
  lvl,
  exp: 0,
  nextLevel: 0,
  gold: 0,
  critRate: 50,
  critDamage: 100,
  accuracy: 75,
  resist: 25,
  status: 'healthy',
  battleOdds: 0.25,
  selectBoxX,
  selectBoxY,
  selectBoxWidth,
  selectBoxHeight,
  totalSkills: 0,
  totalItems: 0,
  chest: false,
  distanceBetweenStuffX,
  distanceBetweenStuffY,
  damage,
  maxHp,
  currentHp: 6,
  def,
  speed,
};
