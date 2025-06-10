import { CronParser } from './parser/CronParser';

function format(label: string, values: number[] | string): string {
    return label.padEnd(14) + (Array.isArray(values) ? values.join(' ') : values);
}

const cronLine = process.argv[2];
if (!cronLine) {
    console.error("Usage: ts-node src/cli.ts '<cron_expression>'");
    process.exit(1);
}

try {
    const parser = new CronParser(cronLine);
    const result = parser.parse();
    for (const key of Object.keys(result)) {
        console.log(format(key, result[key as keyof typeof result]));
    }
} catch (e) {
    console.error('Error:', (e as Error).message);
}
