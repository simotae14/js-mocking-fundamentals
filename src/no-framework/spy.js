const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// create a custom mock function
function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  // add the mock and calls pties
  mockFn.mock = {
    calls: []
  };
  // add the new implementation to the impl argument
  mockFn.mockImplementation = newImpl => (impl = newImpl);
  return mockFn;
}

// implement our version of the spyOn
function spyOn(obj, prop) {
  const originalValue = obj[prop];
  // assign the mocked function
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, 'getWinner');

utils.getWinner.mockImplementation((p1, p2) => p2);

const winner = thumbWar('Kent C. Dodds', 'Simone Taeggi');
assert.strictEqual(winner, 'Simone Taeggi');
// check if the content of mock is the same that we expected
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Simone Taeggi'],
  ['Kent C. Dodds', 'Simone Taeggi']
])

// cleanup
utils.getWinner.mockRestore();