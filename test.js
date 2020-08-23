let exp = 1;

const baseStats = {
  exp,
};

console.log('exp: ', exp);
console.log('base exp: ', baseStats.exp);

baseStats.exp = 2;

console.log('exp: ', exp);
console.log('base exp: ', baseStats.exp);

let x = { first: 1 };
let y = x.first;

y = 2;

console.log(x);
console.log(y);
