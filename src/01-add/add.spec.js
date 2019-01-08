const sum = require('./add'); // Load code under test

// create tests
test('add 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

