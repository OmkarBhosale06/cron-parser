import { CronParser } from '../src/parser/CronParser';

describe('CronParser', () => {
    it('parses */15 0 1,15 * 1-5 /usr/bin/find', () => {
        const cron = new CronParser('*/15 0 1,15 * 1-5 /usr/bin/find');
        const result = cron.parse();
        expect(result.minute).toEqual([0, 15, 30, 45]);
        expect(result.hour).toEqual([0]);
        expect(result.dayOfMonth).toEqual([1, 15]);
        expect(result.month).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        expect(result.dayOfWeek).toEqual([1, 2, 3, 4, 5]);
        expect(result.command).toBe('/usr/bin/find');
    });
});
