const experienceLevels = [
  0,
  7,
  23,
  47,
  110,
  220,
  450,
  800,
  1300,
  2000,
  2900,
  4000,
  5500,
  7500,
  10000,
  13000,
  16000,
  19000,
  22000,
  26000,
  30000,
  34000,
  38000,
  42000,
  46000,
  50000,
  54000,
  58000,
  62000,
  65535,
];

function setLevelByExperience(stats) {
  for (let i = 0; i - experienceLevels.length; i++) {
    if (stats.exp < experienceLevels[i]) {
      stats.lvl = i;
      stats.nextLevel = experienceLevels[i] - stats.exp;
      return;
    }
  }
  stats.lvl = experienceLevels.length;
  stats.nextLevel = 0;
  return;
}
export default setLevelByExperience;
