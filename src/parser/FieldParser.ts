import { FIELD_RANGES } from '../parser/constants';

export class FieldParser {
    static parse(field: string, type: keyof typeof FIELD_RANGES): number[] {
        const [min, max] = FIELD_RANGES[type];
        let results: number[] = [];

        const parts = field.split(',');
        for (const part of parts) {
            if (part.includes('/')) {
                const [range, stepStr] = part.split('/');
                const step = parseInt(stepStr, 10);
                const [start, end] = range === '*'
                    ? [min, max]
                    : range.includes('-')
                        ? range.split('-').map(Number)
                        : [parseInt(range), parseInt(range)];
                for (let i = start; i <= end; i += step) {
                    results.push(i);
                }
            } else if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) {
                    results.push(i);
                }
            } else if (part === '*') {
                for (let i = min; i <= max; i++) {
                    results.push(i);
                }
            } else {
                results.push(parseInt(part, 10));
            }
        }

        return Array.from(new Set(results)).sort((a, b) => a - b);
    }
}
