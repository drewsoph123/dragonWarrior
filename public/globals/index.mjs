import skills from './skills.mjs';
import items from './items.mjs';
import equip from './equip.mjs';
import baseStats from './baseStats.mjs';

export default {
  baseStats,
  items,
  skills,
  equip,
  damageWithWeapon: baseStats.damage + equip.damage,
};
