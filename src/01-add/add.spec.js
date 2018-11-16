const sum = require('./add');

test('add 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

