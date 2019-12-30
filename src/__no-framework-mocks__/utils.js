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

module.exports = {
  getWinner: fn((p1, p2) => p2)
};