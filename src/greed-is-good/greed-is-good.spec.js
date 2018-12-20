const score = require('./greed-is-good');

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

test('[2,2,3,3,4] should be 0', () => {
    expect(score([2,2,3,3,4])).toBe(0);
});

test('[1,2,3,3,4] should be 100', () => {
    expect(score([1,2,3,3,4])).toBe(100);
});

test('[1,1,3,3,4] should be 200', () => {
    expect(score([1,1,3,3,4])).toBe(200);
});

test('[1,1,1,3,4] should be 1000', () => {
    expect(score([1,1,1,3,4])).toBe(1000);
});

test('[1,1,1,5,4] should be 1050', () => {
    expect(score([1,1,1,5,4])).toBe(1050);
});

test('[1,1,1,1,1] should be 1200', () => {
    expect(score([1,1,1,1,1])).toBe(1200);
});

test('[5,5,5,5,5] should be 600', () => {
    expect(score([5,5,5,5,5])).toBe(600);
});

test('[2,2,2,3,3] should be 200', () => {
    expect(score([2,2,2,3,3])).toBe(200);
});

test('[3,3,3,2,2] should be 300', () => {
    expect(score([3,3,3,2,2])).toBe(300);
});

test('[4,4,4,2,2] should be 400', () => {
    expect(score([4,4,4,2,2])).toBe(400);
});

