require('../__no-framework-mocks__/utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Kent C. Dodds', 'Simone Taeggi');
assert.strictEqual(winner, 'Simone Taeggi');
// check if the content of mock is the same that we expected
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Simone Taeggi'],
  ['Kent C. Dodds', 'Simone Taeggi']
])

// cleanup
delete require.cache[utilsPath];