const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// save the original value of the function
const originalGetWinner = utils.getWinner;

// create a mock of the getWinner function
utils.getWinner = (p1, p2) => p2;

const winner = thumbWar('Kent C. Dodds', 'Simone Taeggi');
assert.strictEqual(winner, 'Simone Taeggi');

// clean the code and replace the original value
utils.getWinner = originalGetWinner;