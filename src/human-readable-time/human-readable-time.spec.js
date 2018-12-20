const humanReadable = require('./human-readable-time');

describe ('humanReadableTime', () => {

    it('for 0 seconds it shoud return 00:00:00', () => {
        expect(humanReadable(0)).toBe('00:00:00');
    });

    it('for 5 seconds it should return 00:00:05', () => {
        expect(humanReadable(5)).toBe('00:00:05');
    })

    it('for 10 seconds it should return 00:00:10', () => {
        expect(humanReadable(10)).toBe('00:00:10');
    })

    it('for 60 seconds it should return 00:01:00', () => {
        expect(humanReadable(60)).toBe('00:01:00');
    })

    it('for 121 seconds it should return 00:02:01', () => {
        expect(humanReadable(121)).toBe('00:02:01');
    })

    it('for 600 seconds it should return 00:10:00', () => {
        expect(humanReadable(600)).toBe('00:10:00');
    })

    it('for 1 hour it should return 01:00:00', () => {
        expect(humanReadable(60*60)).toBe('01:00:00');
    })

    it('for 37,815 hour it should return 10:30:15', () => {
        expect(humanReadable(37815)).toBe('10:30:15');
    })

    it('for 359999  hour it should return 99:59:59', () => {
        expect(humanReadable(359999 )).toBe('99:59:59');
    })

});