const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-01-28 16:12:03');
    expect(format_date(date)).toBe('3/20/2020');
});