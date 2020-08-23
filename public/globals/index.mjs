import { skills } from './skills.mjs';
import { items } from './items.mjs';
import { equip } from './equip.mjs';
import baseStats from './baseStats.mjs';
import mainMap from './mainMap.mjs';
import locations from './locations.mjs';
import { functions } from './miscFunctions.mjs';
import experienceLevels from './expTable.mjs';
import { enemy } from './enemy.mjs';

export default {
  baseStats,
  items,
  skills,
  equip,
  mainMap: mainMap.mainMap,
  locations,
  functions,
  enemy,
  expTable: experienceLevels.experienceLevels,
};
