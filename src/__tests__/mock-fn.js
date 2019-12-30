const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p2);

  const winner = thumbWar('Kent C. Dodds', 'Simone Taeggi')
  expect(winner).toBe('Simone Taeggi');

  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Simone Taeggi');

  // check every call
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Kent C. Dodds', 'Simone Taeggi');
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Kent C. Dodds', 'Simone Taeggi');

  // check the value of the mock.calls object
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Kent C. Dodds', 'Simone Taeggi' ],
    [ 'Kent C. Dodds', 'Simone Taeggi' ]
  ]);

  // cleanup
  utils.getWinner = originalGetWinner;
})